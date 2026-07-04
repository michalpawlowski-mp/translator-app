import { useState } from "react";
import { useTranslator } from "./hooks/useTranslator";
import TranslatorControls from "./components/TranslatorControls";
import TranslatorTextareas from "./components/TranslatorTextareas";

const App = () => {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("pl");
  const [to, setTo] = useState("en");
  const { result, isLoading, error, translate } = useTranslator();

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark");
    return saved === "dark";
  });

  return (
    <main className="app">
      <div className="app-header">
        <h1 className="app-title">Translator</h1>
        <button
          title="Zmiana motywu strony"
          type="button"
          className="theme-btn"
          onClick={toggleTheme}
          aria-label={isDark ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      <TranslatorControls
        from={from}
        to={to}
        onFromChange={setFrom}
        onToChange={setTo}
        onSwap={handleSwap}
      />

      <TranslatorTextareas
        text={text}
        result={result}
        isLoading={isLoading}
        onTextChange={setText}
      />

      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      <button
        type="button"
        className="translate-btn"
        onClick={() => translate(text, from, to)}
        disabled={isLoading || !text.trim()}
      >
        Tłumacz
      </button>
    </main>
  );
};

export default App;
