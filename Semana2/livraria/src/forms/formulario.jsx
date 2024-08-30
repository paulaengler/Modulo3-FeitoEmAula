import { useForm } from 'react-hook-form';

const Formulario = () => {
    const {register, watch, handleSubmit, formState:{errors}} = useForm(); 
//desestruturação - manipula apenas esses valores do grande objeto
    const onSubmit = (data => {})


}

export default Formulario