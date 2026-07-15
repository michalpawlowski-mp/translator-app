import { useEffect, useRef } from "react";

export const useAutoTranslate = (
  text: string,
  from: string,
  to: string,
  translate: (text: string, from: string, to: string) => void,
  delay = 1000,
) => {
  const lastTranslated = useRef({ text: "", from: "", to: "" });

  useEffect(() => {
    if (!text.trim()) return;

    const timer = setTimeout(() => {
      const prev = lastTranslated.current;
      if (prev.text === text && prev.from === from && prev.to === to) return;

      lastTranslated.current = { text, from, to };
      translate(text, from, to);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, from, to, translate, delay]);
};
