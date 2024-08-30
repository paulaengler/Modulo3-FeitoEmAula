import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Estado para armazenar o valor do contador
  const [count, setCount] = useState(0);

  // useEffect para atualizar o título da página com o valor do contador
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); // Dependência: o efeito será executado sempre que 'count' mudar

  // Funções para incrementar e decrementar o valor do contador
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div className='form'>
      <h3>Contador</h3>
      <p>Valor do Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;


// Explicação do Código:
// Estado do Contador:

// const [count, setCount] = useState(0);: O estado count armazena o valor atual do contador, e setCount é a função para atualizar esse valor.
// Atualização do Título da Página:

// useEffect(() => { document.title = Contador: ${count}; }, [count]);: O useEffect atualiza o título da página com o valor atual do contador sempre que count muda. A dependência [count] garante que o efeito seja executado sempre que o valor do contador for alterado.
// Funções para Atualizar o Contador:

// increment: Aumenta o valor do contador em 1.
// decrement: Diminui o valor do contador em 1.
// Renderização do Componente:

// Mostra o valor atual do contador.
// Inclui dois botões para incrementar e decrementar o contador, que chamam as funções correspondentes quando clicados.