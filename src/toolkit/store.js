import { configureStore } from "@reduxjs/toolkit";

import imagesReduser from "./features/images/imageSlice";

export const store = configureStore({
  reducer: {
    images: imagesReduser,
  },
});
