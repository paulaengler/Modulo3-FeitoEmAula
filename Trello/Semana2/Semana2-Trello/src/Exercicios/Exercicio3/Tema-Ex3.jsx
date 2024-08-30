import "../Exercicio3/Tema-Ex3.css"
import { createContext, useState, useContext } from 'react';

// Cria o contexto para o tema
const ThemeContext = createContext();

// Hook personalizado para acessar o contexto
export const useTheme = () => useContext(ThemeContext);

// Componente que fornece o contexto de tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Define o tema com base no estado
  const theme = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};


// o contexto nessa aplicação sera a mudança do tema, light e dark
//createContext, para criar o contexto
//useState, para modificar o contexto
//agora vamos criar o contexto, e criar o provider
//o children do provider é pq vai envolver todos os componentes

//useState - light é o default
//toggleTheme-função para alterar o tema
// o theme é light, se for, inverte pra dark (?), senao muda pra light(:)
// ThemeContext.Provider value={{theme, toggleTheme} - valores a compartilhar com o componente
// tem uma maneira de consultar o tema e alterar o tema

// import { createContext, useState } from "react";

// export const ThemeContext = createContext()

// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState("light");

//     const toggleTheme = () => {
//         setTheme(theme === "light" ? "dark" : "light");
//     };

//     return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
// }


// agora precisa compartilhar esse contexto, atraves do provider, nos componentes que eu desejar
// importar o themeprovider na main, pq vai pra aplicação toda