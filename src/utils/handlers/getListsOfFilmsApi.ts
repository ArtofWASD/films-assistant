const getListsOfFilmsApi = async (type:string, page:number) => {
    const item = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?selectFields=name&selectFields=nameEn&selectFields=alternativeName&selectFields=shortDescription&selectFields=description&selectFields=rating.kp&selectFields=rating.imdb&selectFields=movieLength&selectFields=poster.previewUrl&selectFields=genres.name&selectFields=countries.name&selectFields=status&selectFields=year&selectFields=id&page=${page}&limit=10&type=${type}&year=2023`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'GY98688-1NK4EYW-J3G0XM1-742MCZ0',
        },
      }
    );
    return item.json();
  };
  export default getListsOfFilmsApi;