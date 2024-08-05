"use client";
import React, { useState } from "react";
import axios from "axios";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home",
  description: "Not need anynore to configure from 0",
};

export default function Page() {
  //  const session = await auth()
  //   if (!session) {
  //     redirect("/");
  //   }

  const [result, setResult] = useState(null);

  const handleIsolateSpeakers = async () => {
    const transcription = [
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
      {
        text: "Another speaker text...",
        start: 23000,
        end: 25000,
        speaker: "B",
      },
    ];
    const audioFilePath = "path_to_audio_file.mp3";

    try {
      const response = await axios.post(
        "http://localhost:8080/isolate-speakers",
        {
          transcription,
          audioFilePath,
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error isolating speakers:", error);
    }
  };
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <div>
        <Button onClick={handleIsolateSpeakers}>Isolate Speakers</Button>
        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </main>
  );
}
