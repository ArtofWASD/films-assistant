'use client';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
interface FormData {
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const submitHandler = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='flex flex-col gap-2'>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-4'
      >
        <label className='flex flex-col gap-2'>
          Почта
          <input
            {...register('email', {
              required: 'Поле обзательно для заполенния',
            })}
            className='w-96 text-black'
          />
        </label>
        <div>
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => (
              <p className='text-red-400 flex gap-2'>
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
        </div>

        <label className='flex flex-col gap-2'>
          Пароль
          <input
            {...register('password', {
              required: 'Поле обзательно для заполенния',
              minLength: {
                value: 8,
                message: 'Пароль не менее 8 символов',
              },
            })}
            className='w-96 text-black'
          />
        </label>
        <ErrorMessage
          errors={errors}
          name='password'
          as='p'
          className='text-red-400'
        />
        <input
          type='submit'
          className='text-white bg-blue-700 disabled:bg-slate-400 mt-4'
          disabled={!isValid}
          value='Войти'
        />
      </form>
      <div>
        Нет учётной записиси?{' '}
        <Link href='/register' className='text-blue-500'>
          Зарегестируйся
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
