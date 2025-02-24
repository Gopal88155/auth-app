import { configureStore } from "@reduxjs/toolkit";
import authReduceer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReduceer,
  },
});

export default store;
