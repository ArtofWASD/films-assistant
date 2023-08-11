import Image from "next/image";


interface ActorPageProps{
    params: {
        actorid: number;
    }
}
interface FilmsProps{
    filmId: number;
    nameRu: string;
    nameEn: string;
    raiting: string;
    description: string;
} 

const ActorPage = async ({ params }: ActorPageProps) => {
    // const actor = await getActorInfoById(params.actorid)
  return (
    <div>
          {/* <h1>{actor.nameRu}</h1>
          <p> Возраст {actor.age}</p><p>день рождения {actor.birthday}</p>
          <p>{actor.birthplace}</p>
          <Image src={actor.posterUrl} alt={actor.nameRu} width={40} height={50} />
          <p>Фильмография:</p>
          <div className="overflow-scroll h-96 w-full">              
              {actor.films?.map((item:FilmsProps) => (
                      <div key={item.filmId} className="flex">
                          <p>{item.nameRu}{item.nameEn}</p>
                          <p>{item.description}</p>
                      </div>
                  ))
              }
          </div>
          <div>
              Интересные факты: {
              
              }
          </div> */}
    </div>
  )
}

export default ActorPage
