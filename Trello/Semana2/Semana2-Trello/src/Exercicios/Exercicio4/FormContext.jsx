import React, { createContext, useState, useContext } from 'react';

// Cria o contexto para os dados do formulário
const FormContext = createContext();

// Hook personalizado para acessar o contexto
export const useForm = () => useContext(FormContext);

// Componente que fornece o contexto do formulário
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Atualiza os dados do formulário
  const updateFormData = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Validação básica do formulário
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Nome é obrigatório';
    if (!formData.email) errors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email inválido';
    return errors;
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, validateForm }}>
      {children}
    </FormContext.Provider>
  );
};
