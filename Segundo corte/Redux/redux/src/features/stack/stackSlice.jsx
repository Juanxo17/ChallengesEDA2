// src/features/stack/stackSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const stackSlice = createSlice({
  name: 'stack',
  initialState,
  reducers: {
    push: (state, action) => {
      state.items.push(action.payload);
    },
    pop: (state) => {
      state.items.pop();
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { push, pop, clear } = stackSlice.actions;
export const selectStackItems = (state) => state.stack.items;
export const selectStackSize = (state) => state.stack.items.length;

export default stackSlice.reducer;