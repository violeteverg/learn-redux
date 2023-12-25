import { configureStore } from "@reduxjs/toolkit";

import customerSlices from "./slices/customerSlices";
import accountSlices from "./slices/accountSlices";

const store = configureStore({
  reducer: {
    customer: customerSlices,
    account: accountSlices,
  },
});

export default store;
