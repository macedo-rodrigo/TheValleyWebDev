import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterForm.scss';

const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);

  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register-form__fieldset'>
          <input
            placeholder='Type your name here...'
            type='text'
            {...register('firstName', { required: true })}
          />
          { errors?.firstName && <p className='register-form__error'>Este campo es obligatorio</p>}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <input
            placeholder='Now your last name...'
            type='text'
            {...register('lastName', { required: true, minLength: 3 })}
          />
          { errors?.lastName && <p className='register-form__error'>Este campo es obligatorio y debe tener al menos 3 caracteres</p>}
        </fieldset>

        <button type='submit'>Aceptar</button>
      </form>

      <h2>Datos:</h2>
      <p>First name: {formData?.firstName}</p>
      <p>Last name: {formData?.lastName}</p>

      <h2>Datos en caliente:</h2>
      <p>First name: {watch('firstName')}</p>
      <p>Last name: {watch('lastName')}</p>
    </div>
  );
};

export default RegisterForm;
