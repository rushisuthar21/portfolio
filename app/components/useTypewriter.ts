import { useEffect, useState } from "react";

interface TypewriterOptions {
  speed?: number;
  delay?: number;
}

export default function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { speed = 100, delay = 0 } = options;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return displayText;
}
