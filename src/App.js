import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Reservations from './components/myReservations/Reservations';
import Home from './components/Home';
import Adds from './components/Adds/Adds';
import './App.css';
import './App.scss';
import Details from './components/Tesla-details';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cars/create" element={<Adds />} />
            <Route path="/reserve" element={<ReserveForm />} />
            <Route path="/users/:id/reserved_cars" element={<Reservations />} />
            {/* <Route path="/cars/create" element={<New />} /> */}
            <Route exact path="/cars/:id" element={<Details />} />
            {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
          </>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
