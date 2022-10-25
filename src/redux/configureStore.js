import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/cars';
import addReducer from './Adds/adds';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    add: addReducer,
  },
});

export default store;
