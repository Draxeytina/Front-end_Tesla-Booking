/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../SCSS/details.scss';
import { Link } from 'react-router-dom';
import Color from './images/colorwheel.jpeg';
import { getCardetails } from '../redux/cars/car-details';

export default function Details() {
  const details = useSelector((state) => state.details);
  console.log(details);
  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardetails(params.id));
  }, [dispatch, params.id]);
  return (
    <div className="details-container">
      <div>
        <img className="details-image" alt={details.model} src={details.image} />
      </div>
      <div className="info-container">
        <div className="details-model">
          MODEL:
          {' '}
          {details.model}
        </div>
        <div>
          <p className="d-tails">
            RANGE:
            {' '}
            {details.range}
            mi
          </p>
        </div>
        <div>
          <p className="d-tails">
            MOTOR:
            {' '}
            {details.motor_type}
          </p>
        </div>
        <div>
          <p className="d-tails">
            0-60mph:
            {' '}
            {details.acceleration_time}
            s
          </p>
        </div>
        <div>
          <p className="d-tails">
            PRICE:
            {' '}
            $
            {details.booking_price}
          </p>
        </div>
        <div>
          <p className="d-tails">
            BOOKING:
            {' '}
            {details.booking_duration}
            {' '}
            WEEKS
          </p>
        </div>
        <div className="color-container">
          <p className="color-text">
            COLOR
            {' '}
            PICKER
          </p>
          <img className="color-wheel" alt="color wheel" src={Color} />
        </div>
        <div className="button-container">
          <Link to="/reservations/create"><button type="button" className="reserve-button">Reserve</button></Link>
        </div>
      </div>
    </div>
  );
}
