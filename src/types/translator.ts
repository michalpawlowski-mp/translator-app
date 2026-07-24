export interface Language {
  code: string;
  label: string;
}

export interface TextareasProps {
  text: string;
  result: string;
  isLoading: boolean;
  onTextChange: (value: string) => void;
  from: string;
  to: string;
}

export interface ControlsProps {
  from: string;
  to: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onSwap: () => void;
}

export interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}
