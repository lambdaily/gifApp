import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Form = ({ onAddCategory, showError }) => {
  const [input, setInput] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onAddCategory(input);
      setInput('');
    } else {
      setIsEmpty(true);
    }
  };

  const onInputChange = ({ target }) => {
    setInput(target.value);
    setIsEmpty(target.value.trim() === '');
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <div className="container mx-auto">
        <div className="field">
          <input
            placeholder="Search Gif"
            value={input}
            onChange={onInputChange}
            type="text"
            className={`border ${
              showError || isEmpty
                ? 'border-2 border-red-500'
                : 'border-2 border-light-secondary focus:border-light-secondary'
            } p-2 mb-2`}
          />
        </div>
      </div>
      <button type="submit" className="bg-black text-white px-3 ml-3">
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
