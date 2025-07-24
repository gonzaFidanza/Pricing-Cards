import { useEffect, useState } from "react";

export default function useTheme() {
  const getInitial = () =>
    localStorage.getItem("theme") ||   
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); 

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
