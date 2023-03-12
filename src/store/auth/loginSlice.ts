import { createSlice } from "@reduxjs/toolkit";
import { LoginRequest } from "../../types/login";

const initialState: LoginRequest = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn(state, action) {},
    logOut(state, action) {},
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
