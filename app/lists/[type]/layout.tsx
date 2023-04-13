interface topsLayoutProps {
  children: React.ReactNode;
}

const TopsLayout: React.FC<topsLayoutProps> = ({ children }) => {
  return (
    <section className='grid justify-items-center'>
      {children}
    </section>
  );
};
export default TopsLayout;
