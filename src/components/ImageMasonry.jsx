import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// components
import ImageBox from "./ImageBox";

function ImageMasonry({ images, show }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
    >
      <Masonry>
        {images &&
          images.slice(0, show).map((item) => <ImageBox item={item} />)}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageMasonry;
