import "./App.css";
import RegistroForm from "./Exercicios/Exercicio1/Form-Ex1";

import Tarefas from "./Exercicios/Exercicio2/Lista-Ex2";

import { ThemeProvider, useTheme } from "./Exercicios/Exercicio3/Tema-Ex3";
import ThemeToggle from "./Exercicios/Exercicio3/Tema-Componente-Ex3";

import { FormProvider } from "../src/Exercicios/Exercicio4/FormContext";
import Form from "../src/Exercicios/Exercicio4/Form";
import FormDataDisplay from "../src/Exercicios/Exercicio4/FormDisplay";

import Counter from "./Exercicios/Exercicio5/Counter";

const ThemedComponent = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <h1>SEMANA 2</h1>

      <h2> Exercício 1 </h2>
      <RegistroForm />

      <h2> Exercício 2 </h2>
      <Tarefas />

      <h2> Exercício 3 </h2>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <h1>{isDarkMode ? "Modo Escuro" : "Modo Claro"}</h1>
        <ThemeToggle />
      </div>

      <h2> Exercício 4 </h2>
      <FormProvider>
        <div>
          <h3>Formulário com Contexto</h3>
          <Form />
          <FormDataDisplay />
        </div>
      </FormProvider>

      <h2> Exercício 5 </h2>
      <div className="App">
        <Counter />
      </div>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App