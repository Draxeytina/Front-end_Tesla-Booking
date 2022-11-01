import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/cars/cars';
import { getReservations } from '../../redux/reservations/reservations';
import Reservation from './Reservation';
import './reservations.scss';

const Reservations = (props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const reservations = useSelector((state) => state.reservations);
  const data = props;
  const { user } = data;

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

  const userReservations = reservations.filter((res) => res.userId === user.id ?? 1);

  return (
    <section className="my-reservations-wrap">
      <h2>RESERVATIONS</h2>
      { userReservations.length === 0 ? (
        <div className="res-header padding">
          <h5>No reservations available. Kindly add a reservation.</h5>
        </div>
      ) : (
        <>
          <div className="res-header">
            <h5>Model</h5>
            <h5>Reservation Date</h5>
          </div>
          <div className="res-body">
            {userReservations.map((res) => (
              <ul key={res.id}>
                <Reservation
                  model={cars.find((car) => car.id === res.carId).model}
                  bookingDate={new Date(res.bookingDate).toDateString()}
                  id={res.id}
                  key={res.id}
                />
              </ul>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Reservations;
