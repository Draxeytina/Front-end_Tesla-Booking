const carsAPI = 'http://127.0.0.1:3000/cars';

const GET_CARS = 'redux/cars/cars/GET_CARS';

function getCars() {
  return async (dispatch) => {
    const response = await fetch(carsAPI);
    const data = await response.json();
    const cars = [];
    data.forEach((car) => {
      const newCar = {
        id: car.id,
        model: car.model,
        image: car.image,
        description: car.description,
      };
      cars.push(newCar);
    });
    dispatch({
      type: GET_CARS,
      payload: cars,
    });
    return data;
  };
}

export default function carsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_CARS:
      return action.payload;
    default:
      return state;
  }
}

export { getCars };
