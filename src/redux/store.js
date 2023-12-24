import { configureStore } from "@reduxjs/toolkit";

import customerSlices from "./slices/customerSlices";

const store = configureStore({
  reducer: {
    customer: customerSlices,
  },
});

export default store;
