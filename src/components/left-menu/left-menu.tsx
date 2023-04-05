import Link from 'next/link';

const LeftMenu = () => {
  return (
    <section className='pt-4 grid justify-center'>
      <ul>
        <li className='font-semibold hover:text-orange-600 text-xl hover:drop-shadow-xl'>
          <Link href='/lists/film'>Фильмы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-xl hover:drop-shadow-xl'>
          <Link href='/lists/tv_series'>Сериалы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-xl hover:drop-shadow-xl'>
          <Link href='/lists/mini_series'>Мини мериалы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-xl hover:drop-shadow-xl'>
          <Link href='/lists/tv_show'>Тв передачи</Link>
        </li>
      </ul>
    </section>
  );
};

export default LeftMenu;
