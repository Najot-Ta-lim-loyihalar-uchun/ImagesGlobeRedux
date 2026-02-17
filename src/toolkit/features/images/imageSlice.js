import { createSlice } from "@reduxjs/toolkit";

import { images } from "../../../data/ImagesData";

const initialState = {
  images,
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    likeImage: (state, { payload }) => {
      state.images = state.images.map((img) =>
        img.id === payload ? { ...img, liked: !img.liked } : img,
      );
    },
    saveImage: (state, { payload }) => {
      state.images = state.images.map((img) =>
        img.id === payload ? { ...img, downloaded: true } : img,
      );
    },
  },
});

export const { likeImage, saveImage } = imageSlice.actions;

export default imageSlice.reducer;
