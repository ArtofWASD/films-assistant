'use client'
interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return <div className='grid justify-items-center text-white'>{children}</div>;
};
export default ProfileLayout;
