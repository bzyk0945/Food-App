import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
type CartState = {
  idCategory: number;
  strCategoryThumb: string;
  strCategory: string;
  strCategoryDescription: string;
}[];

// Initialize the state
const initialState: CartState = [];

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        idCategory: number;
        strCategoryThumb: string;
        strCategory: string;
        strCategoryDescription: string;
      }>
    ) => {
      const itemExists = state.find(
        (item) => item.idCategory === action.payload.idCategory
      );
      if (!itemExists) {
        state.push(action.payload);
      }
    },
  },
});

// Export the actions and reducer
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
