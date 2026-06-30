"use client";

import { useEffect, useState } from "react";

const greetings = [
  "Hello, I am",
  "Bonjour, je m'appelle",
  "Hola, soy",
  "नमस्ते, मैं हूँ",
  "Hallo, ich bin",
];

export default function TypingGreeting() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = greetings[index];

    let timeout: NodeJS.Timeout;

    if (typing) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText("");
        }, 250);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % greetings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, index]);

  return (
    <span>
      {text}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}