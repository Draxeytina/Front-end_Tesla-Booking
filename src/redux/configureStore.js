import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './cars/car-details';
import carsReducer from './cars/cars';
import reservationsReducer from './reservations/reservations';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    details: detailsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
