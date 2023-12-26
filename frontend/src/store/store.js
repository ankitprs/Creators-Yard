import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import sidebarReducer from './uiSlice'


const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarReducer,
  },
})

export default store