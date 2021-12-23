import { configureStore } from '@reduxjs/toolkit';
import driverReducer from '../features/driver/driverSlice';

export const store = configureStore({
  reducer: {
    driver: driverReducer
  },
});
