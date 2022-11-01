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
import ErrorPage from './components/ErrorPage';

function Components(props) {
  const data = props;
  const { user, handleLogout } = data;
  const { admin } = user;

  return (
    <div className="App">
      <Navbar admin={admin} handleLogout={handleLogout} />
      <Routes>
        <>
          <Route exact path="/home" element={<Home />} />
          { admin
            ? (
              <>
                <Route exact path="/new" element={<Adds />} />
                <Route exact path="/delete" element={<Deletes />} />
              </>
            )
            : <></>}
          <Route path="/reservations" element={<Reservations user={user} />} />
          <Route path="/reserve" element={<ReserveForm user={user} />} />
          <Route path="/cars/:id" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </>
      </Routes>
    </div>
  );
}

export default Components;
