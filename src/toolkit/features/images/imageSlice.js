import { createSlice } from "@reduxjs/toolkit";

import { images } from "../../../data/ImagesData";

const initialState = {
  images,
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    deleteImage: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const { deleteImage } = imageSlice.actions;

export default imageSlice.reducer;
