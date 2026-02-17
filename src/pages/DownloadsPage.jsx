import { Navigate } from "react-router-dom";

/* redux */
import { useSelector } from "react-redux";

import ImageMasonry from "../components/ImageMasonry";

function DownloadsPage() {
  const { images } = useSelector((state) => state.images);
  const downloadedImages = images.filter((item) => item.downloaded === true);

  if (downloadedImages.length < 1) {
    return <Navigate to={`*`} />;
  }
  return (
    <section className="h-full">
      <ImageMasonry images={downloadedImages}> </ImageMasonry>
    </section>
  );
}

export default DownloadsPage;
