import carsReducer from "./cars";

describe("Test cars reducer", () => {
  test("Get cars", () => {
    const action = {
      type: "redux/cars/cars/GET_CARS",
      payload: [
        {
          id: 1,
          model: "Model S",
          image: "https://i.imgur.com/9X9XjK1.jpg",
          description: "This is a car",
        },
        {
          id: 2,
          model: "Model 3",
          image: "https://i.imgur.com/9X9XjK1.jpg",
          description: "This is a car",
        },
      ],
    };
    const state = carsReducer([], action);
    expect(state).toEqual([
      {
        id: 1,
        model: "Model S",
        image: "https://i.imgur.com/9X9XjK1.jpg",
        description: "This is a car",
      },
      {
        id: 2,
        model: "Model 3",
        image: "https://i.imgur.com/9X9XjK1.jpg",
        description: "This is a car",
      },
    ]);
  });
});