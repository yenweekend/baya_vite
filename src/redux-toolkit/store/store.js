import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "../slice/brandSlice";
import homeReducer from "../slice/homeSlice";
import variantSlice from "../slice/variantSlice";
const store = configureStore({
  reducer: {
    brand: brandReducer,
    homepage: homeReducer,
    variant: variantSlice,
  },
});
export default store;
