import { useSelector, useDispatch } from 'react-redux';
import { FetchCars, AddCar } from '../../redux/Adds/adds';
import TextField from '@material-ui/core/TextField';

export default function Adds() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchCars());
  };

  return (
    <div>
      <form
      onSubmit={handleSubmit}
      id="form"
      autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="model"
          placeholder="Model"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="color"
          placeholder="Color"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="range"
          placeholder="Range"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="motor"
          placeholder="Motor"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="acceleration"
          placeholder="Acceleration"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="price"
          placeholder="Price"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          type="text"
          name="duration"
          placeholder="Duration"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
