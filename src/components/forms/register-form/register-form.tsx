'use client';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
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
        className='flex flex-col gap-4 items-center border-rose-600 border-2 p-4 rounded-lg'
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
              <p className='text-red-400 flex gap-2 self-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                  />
                </svg>
                {message}
              </p>
            )}
          />
        <label>
          <p className='text-white text-sm py-1'>Введите адрес почты</p>
          <input
            {...register('email', {
              required: 'required',
            })}
            className='w-96 p-1 rounded-md'
            placeholder='Например: ivan@gmail.com'
          />
        </label>
        <label>
          <p className='text-white text-sm py-1'>Введите пароль:</p>
          <input
            {...register('password', {
              required: 'required',
            })}
            className='w-96 p-1 rounded-md'
          />
        </label>
        <label>
          <p className='text-white text-sm p-1'>Повторите пароль:</p>
          <input
            {...register('passwordSubmit', {
              required: 'required',
            })}
            className='w-96 py-1 rounded-md'
          />
        </label>
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
