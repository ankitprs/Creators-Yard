import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    user: (state) => {

    }
  },
});

export const { toggleSidebar, user } = uiSlice.actions;
export default uiSlice.reducer;
