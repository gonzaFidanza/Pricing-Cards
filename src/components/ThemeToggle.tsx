import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center w-10 h-10 cursor-pointer rounded-full absolute right-20 shadow-lg dark:border-gray-600 bg-card text-primary-text"
      aria-label="Cambiar tema"
    >
      {theme !== "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
