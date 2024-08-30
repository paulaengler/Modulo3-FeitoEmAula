import React from 'react';
import { useForm } from 'react-hook-form';
import "../Exercicio1/Form-Ex1.css"

const RegistroForm = () => {
  // Desestruturando useForm para obter as funções e objetos necessários
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = React.useState(false);

  // Função chamada quando o formulário é enviado com sucesso
  const onSubmit = (data) => {
    // console.log(data); // Aqui você pode enviar os dados para uma API ou processar como necessário
    setSubmitted(true); // Define que o formulário foi enviado
    reset(); // Limpa o formulário após envio
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <br></br>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'O nome é obrigatório' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <br></br>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'O e-mail é obrigatório'
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <br></br>
          <input
            id="password"
            type="password"
            {...register('password', { 
              required: 'A senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <br></br>
        <button className='btn_submit' type="submit">Registrar</button>
      </form>

      {submitted && <p>Registro realizado com sucesso!</p>}
    </div>
  );
};

export default RegistroForm;