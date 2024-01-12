import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import authSliceReducer from "./authSlice";

//These individual reducers here will then automatically be merged together into one main reducer, which is exposed to this store.
const store = configureStore({
  // reducer: counterSlice.reducer, //here we have single slice then directly write 
  reducer: { counter: counterSliceReducer, auth: authSliceReducer } //here we have multiple slice then we use object 
});

export default store; 

// const redux = require("redux"); //here import redux
// import { createStore } from 'redux';  //here import specific thing the redux library

// const counterReducer = ( state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if(action.type === 'TOGGLE') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter, //here we invert the value of showCounter
//     }
//   }

//   return state;  //return unchanged state
// };

//here create store of redux
//createStore want a pointer at a reducer function as a parameter
//const store = configureStore(counterReducer) //returns a store object

// export default store;
