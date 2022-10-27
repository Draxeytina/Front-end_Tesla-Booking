import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/cars/cars';
import { getReservations } from '../../redux/reservations/reservations';
import Reservation from './Reservation';

const Reservations = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCars());
    }
  }, [cars.length, dispatch]);

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(getReservations());
    }
  }, [reservations.length, dispatch]);

  return (
    <section>
      <h1>My Reservations</h1>
      {reservations.map((res) => (
        <ul key={res.id}>
          <Reservation
            model={cars.find((car) => car.id === res.carId).model}
            bookingDate={new Date(res.bookingDate).toDateString()}
            id={res.id}
            key={res.id}
          />
        </ul>
      ))}
    </section>
  );
};

export default Reservations;
