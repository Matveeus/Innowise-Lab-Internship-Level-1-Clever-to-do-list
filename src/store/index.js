import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
