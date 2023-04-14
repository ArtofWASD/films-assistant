const getFilmsReleases = async () => {
  const now = await new Date();
  const year = await now.getFullYear();
  const month = await now
    .toLocaleString('en-US', { month: 'long' })
    .toUpperCase();  
  const item = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=${year}&month=${month}&page=1`,
    {
      method: 'GET',
      headers: {
        'X-API-KEY': 'cb7f9eb3-5898-4a1d-ba86-88ec78c6b728',
      },
    }
  );
  return item.json();
};
export default getFilmsReleases;
