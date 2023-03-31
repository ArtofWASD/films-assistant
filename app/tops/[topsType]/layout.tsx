interface topsLayoutProps {
    children: React.ReactNode;
  }
  
  const TopsLayout: React.FC<topsLayoutProps> = ({ children }) => {
    return (
      <section className="grid justify-items-center">
        <h1 className="py-4">Новинки за месяц</h1>
        {children}
      </section>
    );
  };
  export default TopsLayout;