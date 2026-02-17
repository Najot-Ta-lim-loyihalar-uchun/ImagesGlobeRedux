import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import ImageMasonry from "../components/ImageMasonry";

function LikedImagesPage() {
  const { images } = useSelector((state) => state.images);
  const likedImages = images.filter((item) => item.liked === true);

  if (likedImages.length < 1) {
    return <Navigate to={`*`} />;
  }

  return (
    <section>
      <ImageMasonry images={likedImages}> </ImageMasonry>
    </section>
  );
}

export default LikedImagesPage;
