const getActorInfoById = async (id:number) => {  
    const item = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'cb7f9eb3-5898-4a1d-ba86-88ec78c6b728',
        },
      }
    );
    return item.json();
  };
  export default getActorInfoById;