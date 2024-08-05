"use server";

import axios from "axios";

// interface TTSProps {
//   textToSpeech: string;
//   voide_id?: string;
//   output_format: string;
//   quality: string;
//   seed: number;
//   temperature: number;
//   emotion: string;
//   style_guidance: number;
// }

export async function TTS({ textToSpeech, voide_id, output_format }: any) {
  const voice_id =
    "s3://voice-cloning-zero-shot/65e53cb1-debc-4acd-8d84-9ea46499c8a5/myvoice/manifest.json";
  const voice_name = "myvoice";
  const options = {
    method: "POST",
    url: "https://api.play.ht/api/v2/tts",
    headers: {
      accept: "text/event-stream",
      "content-type": "application/json",
      AUTHORIZATION: process.env.PLAYHT_API_KEY!,
      "X-USER-ID": process.env.PLAYHT_USER_ID!,
    },
    data: {
      text: textToSpeech,
      voice: voice_id,
      output_format,
      voice_engine: "PlayHT2.0",
      quality: "premium",
      seed: 1,
      temperature: 2,
      emotion: "female_happy",
      style_guidance: 20,
    },
  };

  try {
    const response = await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === "pending") {
          console.log("Yoopie");
        }
        if (response.data.status === "completed") {
            console.log("Bon");
            return response.data;
          }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
