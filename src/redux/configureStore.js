import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './cars/car-details';
import carsReducer from './cars/cars';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    details: detailsReducer,
  },
});

export default store;
