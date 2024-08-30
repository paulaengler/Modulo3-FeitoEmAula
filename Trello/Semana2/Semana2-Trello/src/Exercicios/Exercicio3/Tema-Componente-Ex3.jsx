import React from "react";
import { useTheme } from "./Tema-Ex3";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className='form' onClick={toggleTheme}>
      {isDarkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};

export default ThemeToggle;
