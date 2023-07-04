import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../Utils/getGifs';

const List = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(category).then((gifs) => setGifs(gifs));
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {gifs.map((gif) => {
        return (
          <div
            key={gif.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col mb-3"
          >
            <h1 className="text-xl font-bold text-center">{gif.title}</h1>
            <img src={gif.url} alt={gif.title} className="w-full mb-4" />
          </div>
        );
      })}
    </div>
  );
};

List.propTypes = {
  category: PropTypes.string.isRequired,
};

export default List;
