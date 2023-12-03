import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const ROLE_KEY = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

const initialState = {
  token: null,
  role: null,
};

const getRoleFromToken = (token) => {
  return jwtDecode(token)[ROLE_KEY];
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token } = action.payload;
      const role = getRoleFromToken(token);
      return { ...initialState, token, role };
    },
    logout: (state, action) => initialState,
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
