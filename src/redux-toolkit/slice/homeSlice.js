import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
  toastify: null,
};
const homeSlice = createSlice({
  name: "homepage",
  initialState: initialValue,
  reducers: {
    setToastify(state, action) {
      state.toastify = action.payload;
    },
  },
});
export default homeSlice.reducer;
export const { setToastify } = homeSlice.actions;
