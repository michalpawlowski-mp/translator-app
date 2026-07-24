import LanguageSelect from "./LanguageSelect";
import type { ControlsProps } from "../types/translator";

const TranslatorControls = ({
  from,
  to,
  onFromChange,
  onToChange,
  onSwap,
}: ControlsProps) => {
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
