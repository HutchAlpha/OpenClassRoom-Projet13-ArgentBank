import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";

const store = configureStore({
  reducer: {
    bank: bankReducer
  }
});

export default store;