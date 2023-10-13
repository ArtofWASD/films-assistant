import { supabase } from '../../src/utils/handlers/supabase';

const ProfilePage = async () => {
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      <div className='py-2 text-white'>Профиль пользователя</div>
    </>
  );
};

export default ProfilePage;
