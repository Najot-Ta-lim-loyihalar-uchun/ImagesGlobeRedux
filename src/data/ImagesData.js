const imageModule = import.meta.glob(
  "../assets/pictures/*.{jpg, jpeg, png, webp}",
  {
    eager: true,
  },
);

export const images = Object.entries(imageModule).map(
  ([path, module], index) => ({
    id: index + 1,
    img: module.default,
    liked: false,
    downloaded: false,
  }),
);
