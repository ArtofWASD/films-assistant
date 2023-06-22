interface CountriesProps {
  countries: Array<string>;
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <div className='flex gap-1'>
      <p className='font-semibold'>Страна:</p>
      <p className='flex gap-1 whitespace-normal'>
        {countries.map((item: any) => item.name).join(', ')}
      </p>
    </div>
  );
};

export default Countries;
