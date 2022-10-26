import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Adds() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:3000/cars/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: e.target.model.value,
        color: e.target.color.value,
        image: e.target.image.value,
        range: e.target.range.value,
        motor_type: e.target.motor_type.value,
        acceleration_time: e.target.acceleration_time.value,
        booking_price: e.target.booking_price.value,
        booking_duration: e.target.booking_duration.value,
        description: e.target.description.value,
      }),
    });
    response.json();

    if (response.status === 201) {
      window.location.reload();
    }

    return response;
  };

  return (
    <div>
      <h1>Add New Car</h1>
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
          type="integer"
          name="range"
          placeholder="Range"
        />
        <TextField
          id="standard-basic"
          label="Motor type"
          variant="outlined"
          type="text"
          name="motor_type"
          placeholder="Motor"
        />
        <TextField
          id="standard-basic"
          label="Acceleration time"
          variant="outlined"
          type="decimal"
          name="acceleration_time"
          placeholder="Acceleration"
        />
        <TextField
          id="standard-basic"
          label="Booking price"
          variant="outlined"
          type="decimal"
          name="booking_price"
          placeholder="Price"
        />
        <TextField
          id="standard-basic"
          label="Booking duration"
          variant="outlined"
          type="integer"
          name="booking_duration"
          placeholder="Duration"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          type="text"
          name="description"
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
}
