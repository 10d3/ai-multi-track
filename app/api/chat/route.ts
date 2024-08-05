import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo-0125'),
    messages,
  });

  const data = new StreamData();

  data.append({ test: 'value' });

  const stream = result.toAIStream({
    onFinal(_) {
      data.close();
    },
  });

  return new StreamingTextResponse(stream, {}, data);
}