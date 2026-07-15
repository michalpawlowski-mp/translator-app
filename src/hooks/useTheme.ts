import { useState } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark");
    return saved === "dark";
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return { isDark, toggleTheme };
};
