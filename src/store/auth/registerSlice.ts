import { createSlice } from "@reduxjs/toolkit";
import { RegisterRequest } from "../../types/register";
import { createNewUser } from "../../utils/firebase/firebase.utils";

const registerState: RegisterRequest = {
  email: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: registerState,
  reducers: {
    register(state, action) {
      const { type, payload } = action;
      createNewUser(payload.email, payload.password);
    },
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice;
