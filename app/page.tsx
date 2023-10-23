import CategoryList from '../src/components/category-list/category-list';
import Galery from '../src/components/galery/galery';
import categoryListApi from '../src/utils/handlers/categoryListApi';
import galeryApi from '../src/utils/handlers/galeryApi';

const Page = async () => {
  const newFilmsApi = await galeryApi()
  const item = await categoryListApi()
  return (
    <main className='flex flex-col mt-24'>
      <div>
        <Galery images={newFilmsApi} />
        <p className='text-white text-center my-4 text-2xl'>Новинки кино</p>
        <CategoryList data={item} />
      </div>
    </main>
  );
};

export default Page;
