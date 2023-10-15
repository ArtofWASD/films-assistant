'use client';
import { userData } from '../../src/components/store/userData';

const ProfilePage = () => {
  const user = userData((state: any) => state.user);
  return (
    <>
      <div className='py-2 text-white flex justify-center'>
        {/* <p>{user.user_metadata?.first_name}</p> */}
      </div>
    </>
  );
};

export default ProfilePage;
