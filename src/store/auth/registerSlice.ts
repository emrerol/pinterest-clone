import { createSlice } from "@reduxjs/toolkit";
import { RegisterRequest } from "../../types/register";

const registerState: RegisterRequest = {
  email: "",
  age: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: registerState,
  reducers: {
    register(state, action) {
      const { type, payload } = action;
    },
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice;
