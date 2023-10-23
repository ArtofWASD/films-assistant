const categoryListApi = async () => {
  const item = await fetch(
    'https://api.kinopoisk.dev/v1.3/movie?selectFields=name&selectFields=enName&selectFields=year&selectFields=shortDescription&selectFields=rating.kp&selectFields=rating.imdb&selectFields=poster.url&selectFields=premiere.world&selectFields=id&sortField=premiere.world%20%7C%20year&sortType=1&page=1&limit=40&type=movie&year=2023&status=completed&rating.kp=string',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': 'GY98688-1NK4EYW-J3G0XM1-742MCZ0',
      },
    },
  );
  return item.json();
};
export default categoryListApi;
