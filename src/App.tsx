import { useState } from "react";
import { useTranslator } from "./hooks/useTranslator";
import { useTheme } from "./hooks/useTheme";
import { useAutoTranslate } from "./hooks/useAutoTranslate";
import TranslatorControls from "./components/TranslatorControls";
import TranslatorTextareas from "./components/TranslatorTextareas";

const App = () => {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("pl");
  const [to, setTo] = useState("en");
  const { result, isLoading, error, translate } = useTranslator();
  const { isDark, toggleTheme } = useTheme();

  useAutoTranslate(text, from, to, translate);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <main>
      <header>
        <h1>Translator</h1>
        <button
          title="Zmiana motywu strony"
          type="button"
          className="theme-btn"
          onClick={toggleTheme}
          aria-label={isDark ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </header>

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
    </main>
  );
};

export default App;
