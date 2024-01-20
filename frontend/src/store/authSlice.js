import { createSlice } from "@reduxjs/toolkit";
import authService from "../gcp/auth";


const initialState = {
  status: false,
  userData: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true
      state.userData = action.payload.userData
    },
    logout: (state) => {
      authService.logout()
      state.status = false
      state.userData = null
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer;