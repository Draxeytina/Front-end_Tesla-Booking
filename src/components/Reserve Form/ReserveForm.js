import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/cars';
import { reserveCarThunk } from '../../redux/reserveCarThunk';
import './reserveForm.scss';

const Reserve = () => {
  const dispatch = useDispatch();
  const carsData = useSelector((state) => state.cars);
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const createReservation = (e) => {
    e.preventDefault();
    const carID = document.getElementById('reservation-form__model').value;
    const reservation = {
      car_id: carID,
      user_id: 1,
      booking_date: e.target.reservationDate.value,
    };
    dispatch(reserveCarThunk(reservation));
  };

  const formOptions = () => {
    const options = [];
    carsData.forEach((car) => {
      options.push(<option key={car.id} value={car.id}>{car.model}</option>);
    });
    return options;
  };

  return (
    <section id="reservation-form">
      <h2> RESERVATION FORM </h2>
      <form onSubmit={(e) => { createReservation(e); }}>
        <select name="model" id="reservation-form__model" form="reserve-car">
          {formOptions()}
        </select>
        <input type="date" name="reservationDate" id="reservation-form__booking-date" min={today} max="2030-12-31" required />
        <button type="submit">RESERVE</button>
      </form>
    </section>
  );
};

export default Reserve;
