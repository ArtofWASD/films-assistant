const getActorInfoApi = async (id:number) => {
    const item = await fetch(
      `https://api.kinopoisk.dev/v1/person?selectFields=name&selectFields=movies.name&selectFields=birthday&selectFields=movies.description&selectFields=photo&selectFields=growth&selectFields=age&selectFields=movies.rating&selectFields=birthPlace.value&selectFields=spouses.name&page=1&limit=10&id=${id}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'GY98688-1NK4EYW-J3G0XM1-742MCZ0',
        },
      }
    );
    return item.json();
  };
  export default getActorInfoApi;