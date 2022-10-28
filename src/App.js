import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Reservations from './components/myReservations/Reservations';
import ReserveForm from './components/Reserve Form/ReserveForm';
import Home from './components/Home';
import Adds from './components/Adds/Adds';
import Deletes from './components/Delete/Deletes';
import Details from './components/Tesla-details';
// import './App.css';
// import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/new" element={<Adds />} />
            <Route exact path="/delete" element={<Deletes />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/reserve" element={<ReserveForm />} />
            {/* <Route path="/cars/create" element={<New />} /> */}
            <Route path="/cars/:id" element={<Delete />} />
            {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
          </>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
