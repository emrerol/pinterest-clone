import { createSlice } from "@reduxjs/toolkit";
import { LoginRequest } from "../../types/login";

const loginState: LoginRequest = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    logIn(state, action) {
      const { type, payload } = action;
    },
    logOut(state, action) {
      const { type, payload } = action;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
