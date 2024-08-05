'use server'


import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
});

interface transcreateTextProps{
    text: string,
    targetLang: string
}

export async function transcreateText({text, targetLang}: transcreateTextProps) {
  const prompt = `Translate and adapt the following text to ${targetLang} while maintaining the context and cultural relevance:\n\n${text}`;
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-1106",
    prompt: prompt,
    max_tokens: 500
  });
  return response.choices[0].text.trim();
}
