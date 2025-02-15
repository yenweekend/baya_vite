import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    input: "",
    result: null,
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.input = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setSearchInput, setResult } = searchSlice.actions;
export default searchSlice.reducer;
