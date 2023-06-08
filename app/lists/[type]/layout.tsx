interface topsLayoutProps {
  children: React.ReactNode;
}

const TopsLayout: React.FC<topsLayoutProps> = ({ children }) => {
  return (
    <div className='layout grid justify-items-center'>
      {children}
    </div>
  );
};
export default TopsLayout;
