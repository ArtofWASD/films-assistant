'use client';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
import { supabase } from '../../../utils/handlers/supabase';
import { useRouter } from 'next/navigation';
interface FormData {
  email: string;
  password: string;
}
const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const submitHandler = async (loginData: FormData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: `${loginData.email}`,
      password: `${loginData.password}`,
    });
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log(session);

    if (session) {
      localStorage.setItem('user', session.access_token);
      router.push('/profile');
    }
    await reset();
  };

  return (
    <div className='flex flex-col gap-2'>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-4'
      >
        <label>
          <p className='text-white text-sm py-1'>Ваше имя</p>
          <input
            {...register('email', {
              required: 'Обязательное поле для заполнения',
            })}
            className='w-96 p-1 rounded-md text-black'
          />
        </label>
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => (
            <p className='text-red-400 flex self-start text-xs'>{message}</p>
          )}
        />
        <label className='flex flex-col gap-2'>
          <p className='text-white text-sm py-1'>Пароль</p>
          <input
            {...register('password', {
              required: 'Поле обзательно для заполенния',
            })}
            className='w-96 p-1 rounded-md text-black'
            type='password'
          />
        </label>
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => (
            <p className='text-red-400 flex self-start text-xs'>{message}</p>
          )}
        />
        <input
          type='submit'
          className='text-white bg-blue-700 disabled:bg-slate-400 mt-4'
          disabled={!isValid}
          value='Войти'
        />
      </form>
      <div className='flex gap-2 pt-2 justify-center'>
        <p>Нет учётной записи?</p>
        <Link href='/register' className='text-blue-500'>
          Зарегестируйся
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
