'use server'

import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLY_AI_KEY as string,
});

interface transcribeProps {
  audioUrl: string | File;
  speaker_labels: boolean;
  format_text: boolean;
  punctuate: boolean;
  word_boost: string[];
  sentiment_analysis: boolean;
  auto_highlights: boolean;
}
export const transcribe = async () => {
  const audioUrl =
    "https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3";

  if (!audioUrl) {
    throw new Error();
  }

  const params = {
    audio_url: audioUrl,
    speaker_labels: true,
    format_text: true,
    punctuate: true,
    word_boost: ["custom words"],
    sentiment_analysis: true,
    auto_highlights: true,
    // boost_param: 1.0,
  };
  const transcript = await client.transcripts.transcribe(params);

  if (transcript.status === "error") {
    console.log(transcript.error);
  }

  // console.log(transcript)
  return transcript.sentiment_analysis_results
  // console.log(transcript.text);

  // for (let utterance of transcript.utterances!) {
  //   console.log(`Speaker ${utterance.speaker}: ${utterance.text}`);
  // }
  // for (const result of transcript.sentiment_analysis_results!) {
  //   console.log(result.text);
  //   console.log(result.sentiment);
  //   console.log(result.confidence);
  //   console.log(`Timestamp: ${result.start} - ${result.end}`);
  // }
  // for (const result of transcript.auto_highlights_result!.results) {
  //   const timestamps = result.timestamps
  //     .map(({ start, end }) => `[Timestamp(start=${start}, end=${end})]`)
  //     .join(", ");
  //   console.log(
  //     `Highlight: ${result.text}, Count: ${result.count}, Rank ${result.rank}, Timestamps: ${timestamps}`
  //   );
  // }
};
