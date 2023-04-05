interface topsLayoutProps {
  children: React.ReactNode;
  params: {
    type: string;
  };
}

const TopsLayout: React.FC<topsLayoutProps> = ({ children, params }) => {
  let type = '';
  switch (params.type) {
    case 'tv_series':
      type = 'тв сериалов.';
      break;
    case 'film':
      type = 'фильмов.';
      break;
    case 'mini_series':
      type = 'мини сериалов.';
      break;
    case 'tv_show':
      type = 'тв-шоу.';
      break;
    default:
      type = '';
  }

  return (
    <section className='grid justify-items-center'>
      <h1 className='py-4'>Новинки {type}</h1>
      {children}
    </section>
  );
};
export default TopsLayout;
