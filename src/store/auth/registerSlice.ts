import { createSlice } from "@reduxjs/toolkit";
import { RegisterRequest } from "../../types/register";

const initialState: RegisterRequest = {
  email: "",
  age: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register(state, action) {},
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice;
