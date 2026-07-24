import { LANGUAGES } from "../constants/languages";
import type { LanguageSelectProps } from "../types/translator";

const LanguageSelect = ({
  value,
  onChange,
  ariaLabel,
}: LanguageSelectProps) => {
  return (
    <select
      aria-label={ariaLabel}
      title={ariaLabel}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {LANGUAGES.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
