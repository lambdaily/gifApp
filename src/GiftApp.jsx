import { useState } from 'react';
import Form from './Components/Form.jsx';
import './index.css';
import List from './Components/List.jsx';

const GiftApp = () => {
  const [categories, setCategories] = useState([]);
  const [showError, setShowError] = useState(false);

  const onAddCategory = (category) => {
    if (!category || categories.includes(category)) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="100">
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          fontFamily="Belanosima"
          fontSize="48"
          fill="white"
          stroke="black"
          strokeWidth="3"
          transform="translate(2,2)"
        >
          GIF APP
        </text>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          fontFamily="Belanosima"
          fontSize="48"
          fill="#6868ac"
        >
          GIF APP
        </text>
      </svg>

      <Form onAddCategory={onAddCategory} showError={showError} />

      {categories.map((category) => (
        <List key={category} category={category} />
      ))}
    </>
  );
};

export default GiftApp;
