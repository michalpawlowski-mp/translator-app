import type { TextareasProps } from "../types/translator";

const TranslatorTextareas = ({
  text,
  result,
  isLoading,
  onTextChange,
  from,
  to,
}: TextareasProps) => {
  const speak = (content: string, lang: string) => {
    if (!content.trim()) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="textareas">
      <div className="textarea-wrap">
        <textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Wpisz tekst..."
          aria-label="Tekst do tłumaczenia"
        />
        {text && (
          <>
            <button
              type="button"
              className="clear-btn"
              onClick={() => onTextChange("")}
              aria-label="Wyczyść tekst"
            >
              ✕
            </button>
            <button
              type="button"
              className="speak-btn speak-btn--left"
              onClick={() => speak(text, from)}
              aria-label="Odczytaj tekst"
            >
              🔊
            </button>
          </>
        )}
      </div>
      <div className="textarea-wrap">
        <textarea
          className="output"
          value={isLoading ? "Tłumaczenie..." : result}
          readOnly
          placeholder="Tłumaczenie..."
          aria-label="Wynik tłumaczenia"
        />
        {result && !isLoading && (
          <>
            <button
              type="button"
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(result)}
              aria-label="Kopiuj tłumaczenie"
            >
              📋
            </button>
            <button
              type="button"
              className="speak-btn speak-btn--right"
              onClick={() => speak(result, to)}
              aria-label="Odczytaj tłumaczenie"
            >
              🔊
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TranslatorTextareas;
