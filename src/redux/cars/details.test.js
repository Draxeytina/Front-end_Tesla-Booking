import detailsReducer from './car-details';

describe('Test details reducer', () => {
  test('Get details', () => {
    const action = {
      type: 'redux/cars/car-details',
      payload: {
        id: 1,
        model: 'Model S',
        image: 'https://i.imgur.com/9X9XjK1.jpg',
        description: 'This is a car',
      },
    };
    const state = detailsReducer([], action);
    expect(state).toEqual({
      id: 1,
      model: 'Model S',
      image: 'https://i.imgur.com/9X9XjK1.jpg',
      description: 'This is a car',
    });
  });
});
