import { useState } from "react";

export const useTranslator = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const translate = async (text: string, from: string, to: string) => {
    if (!text) return;
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`,
      );
      const data = await res.json();
      setResult(data.responseData.translatedText);
    } catch {
      setError("Coś poszło nie tak");
    } finally {
      setIsLoading(false);
    }
  };

  return { result, isLoading, error, translate };
};
