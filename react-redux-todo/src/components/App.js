import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, Router, Routes,
} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/:id" element={Detail()} />
    </Routes>
  );
}

export default App;
