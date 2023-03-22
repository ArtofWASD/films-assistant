interface CalendarLayoutProps {
    children: React.ReactNode;
  }
  
  const CalendarLayout: React.FC<CalendarLayoutProps> = ({ children }) => {
    return (
      <section className="grid justify-items-center">
        <p>Календарь</p>
        {children}
      </section>
    );
  };
  export default CalendarLayout;