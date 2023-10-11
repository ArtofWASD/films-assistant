'use client';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Image from "next/image";
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordSubmit: string;
}
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterFormData>({
    mode: 'onBlur',
  });

  const submitHandler = (data: RegisterFormData) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-4 items-center border-rose-600 border-2 p-4 rounded-lg hover:shadow-[0px_0px_5px_5px_rgba(159,18,57,0.5)]'
      >
        <label>
          <p className='text-white text-sm py-1'>Ваше имя</p>
          <input
            {...register('name', {
              required: 'Обязательное поле для заполнения',
            })}
            className='w-96 p-1 rounded-md'
          />
        </label>
        <ErrorMessage
            errors={errors}
            name='name'
            render={({ message }) => (
              <p className='text-red-400 flex self-start text-xs'>
                {message}
              </p>
            )}
          />
        <label>
          <p className='text-white text-sm py-1'>Введите адрес почты</p>
          <input
            {...register('email', {
              required: 'Обязательное поле для заполнения',
            })}
            className='w-96 p-1 rounded-md'
            placeholder='Например: ivan@gmail.com'
          />
        </label>
        <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => (
              <p className='text-red-400 flex self-start text-xs'>
                {message}
              </p>
            )}
          />
        <label>
          <p className='text-white text-sm py-1'>Введите пароль:</p>
          <input
            {...register('password', {
              required: 'Обязательное поле для заполнения',
            })}
            className='w-96 p-1 rounded-md'
          />
        </label>
        <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => (
              <p className='text-red-400 flex self-start text-xs'>
                {message}
              </p>
            )}
          />
        <label>
          <p className='text-white text-sm p-1'>Повторите пароль:</p>
          <input
            {...register('passwordSubmit', {
              required: 'Обязательное поле для заполнения',
            })}
            className='w-96 py-1 rounded-md'
          />
        </label>
        <ErrorMessage
            errors={errors}
            name='passwordSubmit'
            render={({ message }) => (
              <p className='text-red-400 flex self-start text-xs'>
                {message}
              </p>
            )}
          />
        <input
          type='submit'
          className='text-white bg-rose-600 disabled:bg-slate-400 mt-4 py-2 rounded-md w-48'
          disabled={!isValid}
          value='Регистрация'
        />
      </form>
    </>
  );
};

export default RegisterForm;
