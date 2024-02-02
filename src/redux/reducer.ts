import { createReducer } from "@reduxjs/toolkit";

const initialState = { num: 0, age: 15, phnoe: 23666 };

export const mathReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("increment", (state, action) => {
      state.num = state.num + 1;
    })
    .addCase("decrement", (state, action) => {
      if (state.num == 0) {
        state.num = 0;
      } else {
        state.num = state.num - 1;
      }
    });
});
