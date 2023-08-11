import Galery from '../src/components/galery/galery';
import galeryApi from '../src/utils/handlers/galeryApi';

const Page = async () => {
  const newFilmsApi = await galeryApi()

  return (
    <main className='flex flex-col justify-items-cente mt-24'>
      <div>
        <Galery images={newFilmsApi} />
      </div>
    </main>
  );
};

export default Page;
