import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/cars';

const Reserve = () => {
  const dispatch = useDispatch();
  const carsData = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const deleteCar = async (e) => {
    e.preventDefault();
    const response = await fetch(`'http://127.0.0.1:3000/cars/${e.target.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    response.json();
    if (response.status === 200) {
      window.location.reload();
    }
    return response;
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
      <form onSubmit={(e) => { deleteCar(e); }}>
        <select name="model" id="reservation-form__model" form="reserve-car">
          {formOptions()}
        </select>
        <button type="submit">DELETE</button>
      </form>
    </section>
  );
};

export default Reserve;
