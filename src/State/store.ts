import { configureStore } from "@reduxjs/toolkit";
import ComSlicer from "./ComSlicer";

export const store = configureStore({
  reducer: {
    comment: ComSlicer,
  },
});
