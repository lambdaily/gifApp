export const getGifs = (category) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=''&q=${category}&limit=3`
  )
    .then((response) => response.json())
    .then(({ data }) => {
      const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }));
      return gifs;
    })
    .catch((error) => {
      console.error('Error al obtener los GIFs:', error);
    });
};
