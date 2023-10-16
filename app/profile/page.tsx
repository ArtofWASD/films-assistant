'use client';
import { useEffect, useState } from 'react';
import { userData } from '../../src/utils/store/userData';
interface userState {
  user_metadata: {
    first_name: string;
  }|null;
}
const ProfilePage = () => {
  const user = userData((state) => state.user);
  const [userInfo, setUserInfo] = useState<userState>();

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  return (
    <>
      <div className='py-2 text-white flex justify-center'>
        <p>{userInfo?.user_metadata?.first_name}</p>
      </div>
    </>
  );
};

export default ProfilePage;
