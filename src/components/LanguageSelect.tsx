import { LANGUAGES } from "../constants/languages";

interface Props {
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}

const LanguageSelect = ({ value, onChange, ariaLabel }: Props) => {
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
