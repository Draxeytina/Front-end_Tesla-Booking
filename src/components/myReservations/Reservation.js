import React from 'react';
import PropTypes from 'prop-types';

const Reservation = ({
  model, bookingDate, id,
}) => (
  <li id={id} className="list-item">
    <p>{model}</p>
    <p>{bookingDate}</p>
  </li>
);

Reservation.propTypes = {
  model: PropTypes.string.isRequired,
  bookingDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Reservation;
