'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../src/utils/handlers/supabase';
import { userData } from '../../src/utils/store/userData';
import { useRouter } from 'next/navigation';
interface userState {
  user_metadata: {
    first_name: string;
  } | null;
}
const ProfilePage = () => {
  const user = userData(state => state.user);
  const exit = userData(state => state.logOut);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<userState>();
  // выйти из личного кабинета и перенестить на главную
  const userLogOut = async () => {
    let { error } = await supabase.auth.signOut();
    await exit();
    router.push('/');
  };
  // зустанд толкового не может в SSR поэтому используем useEffect что бы актуализировать данные с сервером а потом их апдейтнуть
  useEffect(() => {
    if (user) {
      setUserInfo(user);
    } else {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <>
      {user && (
        <div className='py-2 text-white flex flex-col gap-2 justify-center'>
          <p>Привет {userInfo?.user_metadata?.first_name}</p>
          <input
            type='button'
            value='Выход'
            onClick={userLogOut}
            className='border-2 cursor-pointer p-2 rounded-lg'
          />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
