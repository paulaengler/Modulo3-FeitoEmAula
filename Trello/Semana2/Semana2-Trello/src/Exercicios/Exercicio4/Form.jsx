import React, { useState } from 'react';
import { useForm } from './FormContext';

const Form = () => {
  const { formData, updateFormData, validateForm } = useForm();
  const [errors, setErrors] = useState({});

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Processar a submissão do formulário (ex: enviar dados para o servidor)
      alert('Formulário enviado com sucesso!');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
          />
        </label>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default Form;
