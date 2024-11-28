import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export const fetchTodo = createAsyncThunk("brand/fetchTodo", async () => {
  const rs = await axios.get(`${apiUrl}api/getbrand`);
  return rs?.data?.data;
});

const initialValue = { listBrands: null, loading: false };
const brandSlice = createSlice({
  name: "brand",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        (state.loading = false), (state.listBrands = action.payload);
      });
  },
});
export default brandSlice.reducer;
