import Button from '../../../src/utils/ui/button';

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
      <div className='grid grid-cols-12 items-center w-screen'>
        <h1 className='py-4 col-start-6 col-span-2'>Новинки {type}</h1> 
        <div className='col-start-12'><Button /></div>
      </div>

      {children}
    </section>
  );
};
export default TopsLayout;
