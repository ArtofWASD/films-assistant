import Image from "next/image";

const AwardsList = ({ awards }: any) => {
  const oscarFilteredAwards = awards.items.filter(
    (award: any) => award.name === 'Оскар'
  );
  return (
    <div className='w-full'>
      {awards.total == 0 && <p>Наград нет</p>}
      <section>
        <p className='border-b-2 w-full text-xl font-semibold'>
          Оскар {oscarFilteredAwards.length} шт.
        </p>
        {oscarFilteredAwards.map((award: any) => (
          <section key={award.nominationName}>
                <div className="text-xl font-semibold ">{award.nominationName}</div>
                <div className="grid grid-cols-2">
                {award.persons.map((person: any) => (
                    <div key={person.kinopoiskId} className="flex py-2 gap-2 items-center shadow-xl">
                        <Image src={ person.posterUrl} alt={person.nameRu } width={120} height={50} />
                        <div className="grid">
                        <p>{person.nameRu} ({person.nameEn})</p>
                        <p>{person.profession}</p>
                        </div>
                    </div>
                ))}

                </div>

          </section>
        ))}
      </section>
    </div>
  );
};

export default AwardsList;
