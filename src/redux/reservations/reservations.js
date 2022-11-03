const resAPI = 'http://127.0.0.1:3000/reservations';

const FETCH_RESERVATIONS = 'redux/reservations/reservations/FETCH_RESERVATIONS';

function getReservations() {
  return async (dispatch) => {
    const response = await fetch(resAPI);
    const data = await response.json();
    const reservations = [];
    data.forEach((res) => {
      const newRes = {
        id: res.id,
        carId: res.car_id,
        userId: res.user_id,
        bookingDate: res.booking_date,
      };
      reservations.push(newRes);
    });
    dispatch({
      type: FETCH_RESERVATIONS,
      payload: reservations,
    });
    return data;
  };
}

export default function reservationsReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}

export { getReservations };
