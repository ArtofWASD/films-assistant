const getMovueById = async (id: number) => {
  const item = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'GY98688-1NK4EYW-J3G0XM1-742MCZ0',
    },
  });
  return item.json();
};
export default getMovueById;
