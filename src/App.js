import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Reservations from './components/myReservations/Reservations';
import ReserveForm from './components/Reserve Form/ReserveForm';
import Home from './components/Home';
import Adds from './components/Adds/Adds';
import Deletes from './components/Delete/Deletes';
import Details from './components/Tesla-details';

function Components(props) {
  const data = props;
  const { admin, handleLogout } = data;

  return (
    <div className="App">
      <Navbar admin={admin} handleLogout={handleLogout} />
      <Routes>
        <>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/new" element={<Adds />} />
          <Route exact path="/delete" element={<Deletes />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reserve" element={<ReserveForm />} />
          {/* <Route path="/cars/create" element={<New />} /> */}
          <Route path="/cars/:id" element={<Details />} />
          {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
        </>
      </Routes>
    </div>
  );
}

export default Components;
