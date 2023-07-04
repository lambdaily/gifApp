import { useState } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const Form = ({ onAddCategory, showError }) => {
  const [input, setInput] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onAddCategory(input);
      setInput('');
    }
  };

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <form className="flex " onSubmit={onSubmit}>
      <input
        placeholder="Search Gif"
        value={input}
        onChange={onInputChange}
        type="text"
        className={`border ${
          showError ? 'border-red-500' : 'border-gray-400'
        } p-2 mb-2`}
      />
      <button type="submit" className="bg-black text-white px-3 ml-3 ">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
};

export default Form;
