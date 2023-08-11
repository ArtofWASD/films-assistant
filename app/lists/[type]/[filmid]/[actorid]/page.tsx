import Image from "next/image";
import getActorInfoApi from "../../../../../src/utils/handlers/getActorInfoApi";
interface ActorPageProps{
    params: {
        actorid: number;
    }
}

const ActorPage = async ({ params }: ActorPageProps) => {
const data = await getActorInfoApi(params.actorid)
const actor = data.docs[0]

  return (
    <div>
        <div className="text-white">ID актёра{params.actorid}</div>
         <h1>{actor.name}</h1>
         <Image
          src={actor.photo}
          alt={actor.name}
          width={200}
          height={300}
         />
    </div>
  )
}

export default ActorPage
