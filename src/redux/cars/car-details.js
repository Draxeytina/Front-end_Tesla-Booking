/* eslint-disable no-console */

const carsAPI = 'http://127.0.0.1:3000/cars/';

const GET_DETAILS = 'redux/cars/car-details';

function getCardetails(id) {
  return async (dispatch) => {
    const response = await fetch(`${carsAPI}${id}`);
    const data = await response.json();
    dispatch({
      type: GET_DETAILS,
      payload: data,
    });
    return data;
  };
}

export default function detailsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default:
      return state;
  }
}

export { getCardetails };
