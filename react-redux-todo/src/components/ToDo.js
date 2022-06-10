import React, { useState } from 'react';
import propTypes from 'prop-types';

function ToDo({ text }) {
  const [id, setId] = useState('');
  return (
    <li key={id}>
      {text}
      <button>DEL</button>
    </li>
  );
}

ToDo.prototype = {
  text: propTypes.string.isRequired,
  // id: propTypes.number.isRequired,
};

export default ToDo;
