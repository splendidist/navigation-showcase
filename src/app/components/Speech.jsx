"use client";
import "regenerator-runtime/runtime";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function App() {
  const [redirectUrl, setRedirectUrl] = useState("");

  const commands = [
    {
      command: ["go to *", "open *"],
      callback: (redirectPage) =>
        setRedirectUrl(redirectPage.trim().toLowerCase()),
    },
  ];

  const pages = ["home", "red", "yellow", "blue", "green", "orange", "purple"];
  const urls = {
    home: "/",
    red: "/red",
    yellow: "/yellow",
    blue: "/blue",
    green: "/green",
    orange: "/orange",
    purple: "/purple",
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (redirectUrl) {
      if (pages.includes(redirectUrl)) {
        // Redirect using window.location.href
        window.location.href = urls[redirectUrl];
      } else {
        console.log(`Could not find page: ${redirectUrl}`);
      }
    }
  }, [redirectUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const handleStart = () => {
    console.log("Starting listening");
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    console.log("Stopping listening");
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    console.log("Resetting transcript");
    resetTranscript();
  };

  return (
    <div>
      <p id="transcript">Transcript: {transcript}</p>
      <p>Listening: {listening ? "yes" : "no"}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      {redirectUrl && !pages.includes(redirectUrl) && (
        <p>Could not find page: {redirectUrl}</p>
      )}
    </div>
  );
}
