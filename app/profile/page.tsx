'use client';
import { userData } from '../../src/components/store/userData';

const ProfilePage = async () => {
  const { fetch } = userData((state: any) => ({
    fetch: state.fetch,
  }));
  return (
    <>
      <div className='py-2 text-white'>Профиль пользователя</div>
    </>
  );
};

export default ProfilePage;
