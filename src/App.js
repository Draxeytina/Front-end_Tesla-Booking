import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Reservations from './components/myReservations/Reservations';
import ReserveForm from './components/Reserve Form/ReserveForm';
import Home from './components/Home';
import './App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/reserve" element={<ReserveForm />} />
          <Route path="/users/:id/reserved_cars" element={<Reservations />} />
          {/* <Route path="/cars/create" element={<New />} /> */}
          {/* <Route path="/cars/:id" element={<Delete />} /> */}
          {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
        </>
      </Routes>
    </div>
  );
}

export default App;
