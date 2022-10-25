import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Adds from './components/Adds/Adds';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adds" element={<Adds />} />
    </Routes>
  </>
);
export default App;
