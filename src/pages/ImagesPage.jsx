import { useState } from "react";

/* redux tools */
import { useSelector, useDispatch } from "react-redux";
import { deleteImage } from "../toolkit/features/images/imageSlice";

/* Components */
import ImageMasonry from "../components/ImageMasonry";
import Button from "../components/Button";

function ImagesPage() {
  const { images } = useSelector((state) => state.images || []);
  let [show, setShow] = useState(10);

  return (
    <section>
      <ImageMasonry show={show} images={images} />
      <div className="flex gap-[50px]">
        <Button
          onClick={() => setShow((show -= 10))}
          style={"bg-red-500 hover:bg-red-600"}
        >
          Show Less
        </Button>
        <Button onClick={() => setShow((show += 10))}>Show More</Button>
      </div>
    </section>
  );
}

export default ImagesPage;
