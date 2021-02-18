import { createSlice } from '@reduxjs/toolkit';

const state: string[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: state,
  reducers: {
    updateListNotifications: (state, action) => action.payload,
  },
});
export const { updateListNotifications } = notificationsSlice.actions;
export const notificationsSelector = (state: string[]): string[] => state;

export default notificationsSlice;
