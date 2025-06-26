
"use client";

import { useEffect } from "react";

export default function Asistant() {
  useEffect(() => {
    wishme();
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
  };

  const wishme = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      speak("Good morning");
    } else if (hour >= 12 && hour <= 16) {
      speak("Good afternoon");
    } else if (hour >= 16 && hour <= 20) {
      speak("Good evening");
    } else {
      speak("Good night");
    }
  };

  const takecommand = (message) => {
    if (message.includes("hello") || message.includes("hey")) {
      speak("Hello sir, how can I help you");
    } else if (
      message.includes("what is your name") ||
      message.includes("who are you") ||
      message.includes("hu r u") ||
      message.includes("what ise your name")
    ) {
      speak("Hello sir I am virtual assistant created by Naveen Gupta");
    } else if (message.includes("who is your creater")) {
      speak("Mr Naveen Gupta");
    } else if (message.includes("open instagram")) {
      speak("Opening Instagram");
      window.open("https://www.instagram.com/");
    } else if (message.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://www.youtube.com/");
    } else if (message.includes("open facebook")) {
      speak("Opening Facebook");
      window.open("https://www.facebook.com/");
    } else if (message.includes("open linkedin")) {
      speak("Opening LinkedIn");
      window.open("https://www.linkedin.com/");
    } else if (message.includes("open calculator")) {
      speak("Opening calculator");
      window.open("https://www.google.com/search?q=calculator");
    } else if (message.includes("open calender")) {
      speak("Opening calendar");
      window.open("https://www.timeanddate.com/calendar/");
    } else if (
      message.includes("naveen gupta") ||
      message.includes("navin gupta") ||
      message.includes("hu is navin gupta")
    ) {
      speak("Opening my creator  portfolio");
      window.open("https://naveen-gupta.vercel.app/");
    } else {
      speak("This is what I found on the internet...");
      window.open(`https://www.google.com/search?q=${message}`);
    }
  };

  const handleClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log("You said:", text);
      takecommand(text.toLowerCase());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      <img
        src="https://cdn.dribbble.com/userupload/23131588/file/original-7170a735f9fbc50004dc5ece58421c06.gif"
        alt="AI assistance"
        className="max-w-full rounded-lg"
      />
      <button
        className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
        onClick={handleClick}
      >
        🎤 Click for Assist
      </button>
    </div>
  );
}
