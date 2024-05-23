"use client";
import "regenerator-runtime/runtime";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Speech() {
  const [redirectUrl, setRedirectUrl] = useState("");

  //set user commands for voice navigation, and redirect to that page
  const commands = [
    {
      command: ["go to *", "open *"],
      callback: (redirectPage) =>
        setRedirectUrl(redirectPage.trim().toLowerCase()),
    },
  ];

  //array of pages
  const pages = ["home", "red", "yellow", "blue", "green", "orange", "purple"];

  //set pages to their routes
  const urls = {
    home: "/",
    red: "/red",
    yellow: "/yellow",
    blue: "/blue",
    green: "/green",
    orange: "/orange",
    purple: "/purple",
  };

  //properties and function returned by useSpeechRecognition
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  //if page exists, redirct to page, else do nothing
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

  //if browser doesnt support speech recognition, do nothing
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  //button events
  //start voice navigation
  const handleStart = () => {
    console.log("Starting listening");
    SpeechRecognition.startListening({ continuous: true });
  };

  //stop voice navigation
  const handleStop = () => {
    console.log("Stopping listening");
    SpeechRecognition.stopListening();
  };

  //reset voice navigation
  const handleReset = () => {
    console.log("Resetting transcript");
    resetTranscript();
  };

  return (
    <div className="flex flex-col items-center">
      <p id="transcript">Transcript: {transcript}</p>
      <p>Listening: {listening ? "yes" : "no"}</p>
      <div className="flex items-center">
        <button className="bg-black text-white p-2 m-3" onClick={handleStart}>
          Start
        </button>
        <button className="bg-black text-white p-2 mx-3" onClick={handleStop}>
          Stop
        </button>
        <button className="bg-black text-white p-2 mx-3 " onClick={handleReset}>
          Reset
        </button>
      </div>

      {redirectUrl && !pages.includes(redirectUrl) && (
        <p>Could not find page: {redirectUrl}</p>
      )}
    </div>
  );
}
