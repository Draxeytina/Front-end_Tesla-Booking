import { useSelector, useDispatch } from 'react-redux';
import { FetchCars, AddCar } from '../../redux/Adds/adds';

export default function Adds() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const handleClick = (id) => {
    dispatch(AddCar(id));
  };

  return (
    <div>
      <button type="button" onClick={() => dispatch(FetchCars())}>Fetch Cars</button>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.model}</h2>
          <p>{car.color}</p>
          <p>{car.range}</p>
          <p>{car.motor}</p>
          <p>{car.acceleration}</p>
          <p>{car.price}</p>
          <p>{car.duration}</p>
          <button type="button" onClick={() => handleClick(car.id)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
