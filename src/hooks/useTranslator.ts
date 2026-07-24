import { useState, useCallback } from "react";
import { fetchTranslation } from "../services/translationServices";

export const useTranslator = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const translate = useCallback(
    async (text: string, from: string, to: string) => {
      if (!text.trim()) return;

      setIsLoading(true);
      setError("");
      setResult("");

      try {
        const translated = await fetchTranslation(text, from, to);
        setResult(translated);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Coś poszło nie tak");
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const clearResult = () => {
    setResult("");
    setError("");
  };

  return { result, isLoading, error, translate, clearResult };
};
