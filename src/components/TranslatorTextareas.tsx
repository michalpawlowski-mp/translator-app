interface Props {
  text: string;
  result: string;
  isLoading: boolean;
  onTextChange: (value: string) => void;
}

const TranslatorTextareas = ({
  text,
  result,
  isLoading,
  onTextChange,
}: Props) => {
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
          <button
            type="button"
            className="clear-btn"
            onClick={() => onTextChange("")}
            aria-label="Wyczyść tekst"
          >
            ✕
          </button>
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
          <button
            type="button"
            className="copy-btn"
            onClick={() => navigator.clipboard.writeText(result)}
            aria-label="Kopiuj tłumaczenie"
          >
            📋
          </button>
        )}
      </div>
    </div>
  );
};

export default TranslatorTextareas;
