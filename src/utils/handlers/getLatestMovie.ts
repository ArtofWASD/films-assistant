const getLatestMovie = async (query: string, page:number) => {  
    const item = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=${query}&yearFrom=2022&yearTo=2022&page=${page}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'cb7f9eb3-5898-4a1d-ba86-88ec78c6b728',
        },
      }
    );
    return item.json();
  };
  export default getLatestMovie;
  