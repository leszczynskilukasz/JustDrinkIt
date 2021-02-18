import { configureStore } from '@reduxjs/toolkit';
import notificationsSlice from './notificationsSlice';

const store = configureStore({
  reducer: notificationsSlice.reducer,
});

export default store;
