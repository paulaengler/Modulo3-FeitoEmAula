import React from 'react';
import { useForm } from './FormContext';

const FormDataDisplay = () => {
  const { formData } = useForm();

  return (
    <div className='form'>
      <h2>Dados do Formulário:</h2>
      <p><strong>Nome:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
    </div>
  );
};

export default FormDataDisplay;
