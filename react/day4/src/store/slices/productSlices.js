import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items:[]
  },
  reducers: {
    setItems: (state, action) => {
      
      state.items = action.payload;
    },
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
