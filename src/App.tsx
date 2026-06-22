import { useState } from "react";
import { LANGUAGES } from "./constants/languages";
import { useTranslator } from "./hooks/useTranslator";

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
      <div className="controls">
        <select
          aria-label="Język źródłowy"
          title="Język źródłowy"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>

        <button
          aria-label="Zamień języki"
          title="Zamień języki"
          type="button"
          className="swap-btn"
          onClick={handleSwap}
        >
          ⇄
        </button>

        <select
          aria-label="Język docelowy"
          title="Język docelowy"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      <div className="textareas">
        <textarea
          aria-label="Tekst do tłumaczenia"
          title="Tekst do tłumaczenia"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Wpisz tekst..."
        />
        <textarea
          value={isLoading ? "Tłumaczenie..." : result}
          readOnly
          aria-label="Wynik tłumaczenia"
          title="Wynik tłumaczenia"
          placeholder="Tłumaczenie..."
        />
      </div>

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
