import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice.js";
import userReducer from "./slice/userSlice.js";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userReducer,
  },
});

export default store;
