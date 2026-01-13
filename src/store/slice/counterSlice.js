import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "Amit",
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.value += 1;
    },
    decrement: (state, action) => {
      console.log(action);
      state.value -= 1;
    },
    reset: (state, action) => {
      console.log(action);
      state.value = 0;
    },
    setName: (state, action) => {
      console.log(action);
      state.name = action.payload;
    },
  },
});

export const { increment, decrement, reset, setName } = counterSlice.actions;

export default counterSlice.reducer;
