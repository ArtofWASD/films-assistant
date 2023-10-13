interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <section className="grid justify-items-center text-white">
      <p> Привет Username</p>
      {children}
    </section>
  );
};
export default ProfileLayout;
