import { configureStore } from "@reduxjs/toolkit";

import variantSlice from "../slice/variantSlice";
const store = configureStore({
  reducer: {
    variant: variantSlice,
  },
});
export default store;
