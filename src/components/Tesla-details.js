/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../SCSS/details.scss';
import { Link } from 'react-router-dom';
import Color from './images/color.png';
import { getCardetails } from '../redux/cars/car-details';

export default function Details() {
  const details = useSelector((state) => state.details);
  console.log(details);
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardetails(params.id));
  }, [dispatch, params.id]);
  return (
    <>
      <div className="details-container">
        <img className="details-image" alt={details.model} src={details.image} />
        <div className="info-container">
          <div className="details-model">
            <div>
              Tesla
            </div>
            <div>
              {details.model}
            </div>
          </div>
          <div className="d-tails-container bg">
            <div className="d-tails">
              Range:
            </div>
            <div className="d-tails">
              {details.range}
              mi
            </div>
          </div>
          <div className="d-tails-container">
            <div className="d-tails">
              Motor:
            </div>
            <div className="d-tails">
              {details.motor_type}
            </div>
          </div>
          <div className="d-tails-container bg">
            <div className="d-tails">
              0-60mph:
            </div>
            <div className="d-tails">
              {details.acceleration_time}
              s
            </div>
          </div>
          <div className="d-tails-container">
            <div className="d-tails">
              Price:
            </div>
            <div className="d-tails">
              $
              {details.booking_price}
            </div>
          </div>
          <div className="d-tails-container bg">
            <div className="d-tails">
              Booking:
            </div>
            <div className="d-tails">
              {details.booking_duration}
              {' '}
              Months
            </div>
          </div>
          <div className="color-container">
            <p className="color-text" />
            <img className="color-wheel" alt="color wheel" src={Color} />
          </div>
          <Link to="/reserve">
            <button type="button" className="button-container">
              <div className="reserve-button">Reserve</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="navbutton-boxleft">
        <button type="button">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
      </div>

    </>
  );
}
