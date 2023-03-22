interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <section className="flex flex-col">
      <p>Profile page</p>
      {children}
    </section>
  );
};
export default ProfileLayout;
