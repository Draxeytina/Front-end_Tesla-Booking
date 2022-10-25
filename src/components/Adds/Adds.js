import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Adds() {
  const handleSubmit = async (e) => {
    console.log("I'm here");
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:3000/cars/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: e.target.model.value,
        color: e.target.color.value,
        image: e.target.image.value,
        range: e.target.range.value,
        motor: e.target.motor_type.value,
        acceleration: e.target.acceleration_time.value,
        price: e.target.booking_price.value,
        duration: e.target.booking_duration.value,
      }),
    });
    console.log('response', response);
  };

  return (
    <div>
      <form
        id="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Model"
          variant="outlined"
          type="text"
          name="model"
          placeholder="Model"
        />
        <TextField
          id="standard-basic"
          label="Color"
          variant="outlined"
          type="text"
          name="color"
          placeholder="Color"
        />
        <TextField
          id="standard-basic"
          label="Image"
          variant="outlined"
          type="text"
          name="image"
          placeholder="https://"
        />
        <TextField
          id="standard-basic"
          label="Range"
          variant="outlined"
          type="text"
          name="range"
          placeholder="Range"
        />
        <TextField
          id="standard-basic"
          label="Motor"
          variant="outlined"
          type="text"
          name="motor_type"
          placeholder="Motor"
        />
        <TextField
          id="standard-basic"
          label="Acceleration"
          variant="outlined"
          type="text"
          name="acceleration_time"
          placeholder="Acceleration"
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="outlined"
          type="text"
          name="booking_price"
          placeholder="Price"
        />
        <TextField
          id="standard-basic"
          label="Duration"
          variant="outlined"
          type="text"
          name="booking_duration"
          placeholder="Duration"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
}
