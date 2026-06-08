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

  return (
    <div className="app">
      <div className="controls">
        <select
          title="first language"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>

        <button type="button" className="swap-btn" onClick={handleSwap}>
          ⇄
        </button>

        <select
          title="second language"
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
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Wpisz tekst..."
        />
        <textarea
          value={isLoading ? "Tłumaczenie..." : result}
          readOnly
          placeholder="Tłumaczenie..."
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button
        type="button"
        className="translate-btn"
        onClick={() => translate(text, from, to)}
      >
        Tłumacz
      </button>
    </div>
  );
};

export default App;
