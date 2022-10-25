const url = 'http://localhost:3000/cars';
const GETCARS = 'GETCARS';
const ADDCAR = 'ADDCAR';

function carReducer(state = [], action) {
  switch (action.type) {
    case GETCARS:
      return [...action.cars];
    case ADDCAR:
      return state.map((item) => (
        item.id === action.payload ? { ...item, isAdded: true } : item
      ));
    default:
      return state;
  }
}

const GetCar = (cars) => ({
  type: ADDCAR,
  cars,
});

export const AddCar = (id) => ({
  type: ADDCAR,
  payload: id,
});

export const FetchCars = () => (dispatch) => {
  const List = [];
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      const Data = result;
      Data.forEach((element) => {
        List.push({
          model: element.model,
          color: element.color,
          img: element.image,
          range: element.range,
          motor: element.motor_type,
          acceleration: element.acceleration_time,
          price: element.booking_price,
          duration: element.booking_duration,
        });
      });
      dispatch(GetCar(List));
    });
};

export default carReducer;
