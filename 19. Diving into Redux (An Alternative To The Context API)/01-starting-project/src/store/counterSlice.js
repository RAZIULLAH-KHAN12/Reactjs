import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
//reducer function
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //every method will then automaticaaly receive the latest state.
    increment(state, action) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions; // it will gives an object of action methods.
export default counterSlice.reducer;