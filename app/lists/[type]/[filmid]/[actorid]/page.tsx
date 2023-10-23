import Image from 'next/image';
import getActorInfoApi from '../../../../../src/utils/handlers/getActorInfoApi';
interface ActorPageProps {
  params: {
    actorid: number;
  };
}
interface filmInfoProps {
  id: number;
  name: string;
  rating: number;
  description: string;
}

const ActorPage = async ({ params }: ActorPageProps) => {
  // получаем актёра по его ID, так как API отдаёт файл в виде массива, то информацию забираем по первому ключу из массива.
  const data = await getActorInfoApi(params.actorid);
  const actor = data.docs[0];
  const date = new Date(actor.birthday).toLocaleDateString('ru-ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  return (
    <div className="grid grid-cols-6">
      <h1 className="h-8">{actor.name}</h1>
      <div className="actor_info ">
        <div className="actor_photo text-white flex gap-4 ">
          <Image src={actor.photo} alt={actor.name} width={120} height={150} />
          <div className="flex flex-col gap-1">
            <div>Дата рождения: {date}</div>
            <div>Возраст: {actor.age}</div>
          </div>
        </div>
        {actor && (
          <div>
            {actor.movies
              .filter(
                (item: filmInfoProps) => item.name !== null && item.description !== null,
              )
              .map((item: filmInfoProps) => (
                <>
                  <ul className="text-white my-1" key={item.id}>
                    <li className="text-md">{item.name}</li>
                    <li className="text-sm text-slate-300">{item.description}</li>
                  </ul>
                </>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorPage;
