import { useSelector, useDispatch } from 'react-redux';
import { FetchCars, AddCar } from '../../redux/actions/carActions';
import Car from '../Car/Car';

export default function Adds() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const handleClick = (id) => {
    dispatch(AddCar(id));
  };

  return (
    <div className="adds">
      {cars.map((car) => (
        <Car
          key={car.id}
          id={car.id}
          model={car.model}
          color={car.color}
          img={car.img}
          range={car.range}
          motor={car.motor}
          acceleration={car.acceleration}
          price={car.price}
          duration={car.duration}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}