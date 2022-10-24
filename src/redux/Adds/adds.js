const url = 'http://localhost:3000/users';
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
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      const Data = Object.entries(result);
      Data.forEach((element) => {
        List.push({
          id: element[0].id,
          model: element[0].model,
          color: element[0].color,
          img: element[0].img,
          range: element[0].range,
          motor: element[0].motor,
          acceleration: element[0].acceleration,
          price: element[0].price,
          duration: element[0].duration,
        });
      });
      dispatch(GetCar(List));
    });
};

export default carReducer;
