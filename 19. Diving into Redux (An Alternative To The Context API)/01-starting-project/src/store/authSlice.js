import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    //in both method we will receive the current state as an argument automatically provided by Redux
    //And we can then mutate this state, uder the hood  state is not mutate it overrite the new state
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions; // it will gives an object of action methods.


export default authSlice.reducer;
