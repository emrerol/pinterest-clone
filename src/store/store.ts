import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
import registerSlice from "./auth/registerSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
  },
});

export default store;
