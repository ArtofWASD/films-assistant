const newApi = async () => {
  const item = await fetch(
    'https://api.kinopoisk.dev/v1.3/movie?selectFields=name&selectFields=id&selectFields=shortDescription&selectFields=alternativeName&selectFields=genres.name&selectFields=poster.previewUrl&selectFields=movieLength&page=1&limit=10&year=2022',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': 'GY98688-1NK4EYW-J3G0XM1-742MCZ0',
      },
    }
  );
  return item.json();
};
export default newApi;
