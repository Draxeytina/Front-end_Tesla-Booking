import reservationsReducer from './reservations';

describe('reservationsReducer', () => {
  test('should return the initial state', () => {
    expect(reservationsReducer(undefined, {})).toEqual([]);
  });
  test('should handle FETCH_RESERVATIONS', () => {
    const action = {
      type: 'redux/reservations/reservations/FETCH_RESERVATIONS',
      payload: [
        {
          id: 1,
          carId: 1,
          userId: 1,
          bookingDate: '2021-10-10',
        },
        {
          id: 2,
          carId: 2,
          userId: 2,
          bookingDate: '2021-10-10',
        },
      ],
    };
    const state = reservationsReducer([], action);
    expect(state).toEqual([
      {
        id: 1,
        carId: 1,
        userId: 1,
        bookingDate: '2021-10-10',
      },
      {
        id: 2,
        carId: 2,
        userId: 2,
        bookingDate: '2021-10-10',
      },
    ]);
  });
});
