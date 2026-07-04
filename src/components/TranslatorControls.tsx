import LanguageSelect from "./LanguageSelect";

interface Props {
  from: string;
  to: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onSwap: () => void;
}

const TranslatorControls = ({
  from,
  to,
  onFromChange,
  onToChange,
  onSwap,
}: Props) => {
  return (
    <div className="controls">
      <LanguageSelect
        value={from}
        onChange={onFromChange}
        ariaLabel="Język źródłowy"
      />
      <button
        aria-label="Zamień języki"
        title="Zamień języki"
        type="button"
        className="swap-btn"
        onClick={onSwap}
      >
        ⇄
      </button>
      <LanguageSelect
        value={to}
        onChange={onToChange}
        ariaLabel="Język docelowy"
      />
    </div>
  );
};

export default TranslatorControls;
