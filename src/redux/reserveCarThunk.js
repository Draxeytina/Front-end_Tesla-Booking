import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'http://localhost:3000/reservations/create';

export const reserveCarThunk = createAsyncThunk(
  'reserve-form/reserve-car',
  async (reservation) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response.json();
  },
);

export default reserveCarThunk();
