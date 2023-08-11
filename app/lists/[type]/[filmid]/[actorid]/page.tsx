import Image from 'next/image';
import getActorInfoApi from '../../../../../src/utils/handlers/getActorInfoApi';
interface ActorPageProps {
  params: {
    actorid: number;
  };
}

const ActorPage = async ({ params }: ActorPageProps) => {
  const data = await getActorInfoApi(params.actorid);
  const actor = data.docs[0];

  return (
    <>
      <h1 className='py-4 h-8'>{actor.name}</h1>
      <div className='actor_info grid grid-cols-2'>
        <Image src={actor.photo} alt={actor.name} width={100} height={150}/>
      </div>
    </>
  );
};

export default ActorPage;
