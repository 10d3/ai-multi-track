"use server";

import axios from "axios";
// import { isolateSpeakers } from "../isolate-speakers/isolate-speakers";

const transcription: any = [
  {
    text: "Runner's knee runner's knee...",
    start: 5400,
    end: 17170,
    speaker: "A",
  },
  {
    text: "It is caused by overuse...",
    start: 17510,
    end: 22290,
    speaker: "A",
  },
  { text: "Another speaker text...", start: 23000, end: 25000, speaker: "B" },
];
const audioFilePath = "path_to_audio_file.mp3";

export const cloningVoice = async () => {
  // const result: any = await isolateSpeakers({ transcription, audioFilePath })
  //   .then((speakers) => {
  //     console.log("Extracted Segments by Speaker:", speakers);
  //     return speakers;
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  // for (const element of result) {
    const options = {
      method: "POST",
      url: "https://api.play.ht/api/v2/cloned-voices/instant",
      headers: {
        accept: "application/json",
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        AUTHORIZATION: process.env.PLAYHT_API_KEY!,
        "X-USER-ID": process.env.PLAYHT_USER_ID!,
      },
      data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name="sample_file_url"\r\n\r\nhttps://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="voice_name"\r\n\r\nmyvoice\r\n-----011000010111000001101001--',
    };

    try {
      const response = await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  // }
};
