import { useState, useEffect } from "react";
import "../Exercicio2/Lista-Ex2.css"

const Tarefas = () => {
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // Estado para armazenar o valor do input
  const [valorInput, setValorInput] = useState("");

  // Carregar as tarefas do localStorage quando o componente for carregado
  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  // Salvar as tarefas no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // Função para adicionar uma nova tarefa
  const adicionarTarefas = () => {
    if (valorInput.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      text: valorInput,
    };

    setTarefas([...tarefas, novaTarefa]);
    setValorInput("");
  };

  // Função para remover uma tarefa
  const removerTarefas = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <>
      <div className="lista">
        <h3>Lista de Tarefas</h3>
        <input
          type="text"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <br></br>
        <br></br>
        <button className="btn-adicionar" onClick={adicionarTarefas}>
          Adicionar
        </button>
        <ul className="list">
          {tarefas.map((task) => (
            <li key={task.id}>
              {task.text}
              <br></br>
              <br></br>
              <button
                className="btn-remover"
                onClick={() => removerTarefas(task.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
        {/* <ul>
        {tarefas.length > 0 &&
          tarefas.map(
            (tarefa) =>
              <li key={tarefa.id}>{tarefa.descricao}</li> || (
                <span> Sem tarefas adicionadas </span>
              )
          )}
      </ul> */}
      </div>
    </>
  );
};

export default Tarefas;