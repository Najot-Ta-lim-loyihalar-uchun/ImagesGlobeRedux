import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

/* redux  */
import { useSelector, useDispatch } from "react-redux";
import { likeImage, saveImage } from "../toolkit/features/images/imageSlice";

/* assets && icons */
import {
  FaHeart,
  FaRegHeart,
  FaDownload,
  FaArrowCircleLeft,
} from "react-icons/fa";

function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { images } = useSelector((state) => state.images);
  const currentImage = images.find((item) => item.id == id);
  if (!currentImage) {
    return <Navigate to={"*"} />;
  }

  const { img, liked, downloaded } = currentImage;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <img src={currentImage.img} alt="" className="h-[350px]" />
        <div className="flex justify-center gap-4 mt-[20px] ">
          <Link
            to={"/"}
            className="flex items-center gap-[10px] absolute top-[-50px] left-0 text-[30px] text-blue-400 hover:text-blue-600"
          >
            <FaArrowCircleLeft />
            <span className="text-[22px]"> go to Home</span>
          </Link>
          <div
            onClick={() => dispatch(likeImage(id))}
            className={`
                   
                       w-11 h-11 
                       rounded-full 
                       bg-white/20
                       backdrop-blur-md 
                       shadow-md 
                       flex items-center justify-center 
                       transition-all duration-300
                       hover:scale-110 active:scale-95
                       cursor-pointer
                    `}
          >
            {liked ? (
              <FaHeart
                className="text-red-600 transition-colors duration-300"
                size={22}
              />
            ) : (
              <FaRegHeart
                className="text-red-600 transition-colors duration-300"
                size={22}
              />
            )}
          </div>

          <a
            href={img}
            download
            onClick={() => dispatch(saveImage(id))}
            className={`
                    cursor-pointer
                       w-11 h-11 
                       rounded-full 
                       bg-white/20
                       backdrop-blur-md 
                       shadow-md 
                       flex items-center justify-center 
                       transition-all duration-300
                       hover:scale-110 active:scale-95
                    `}
          >
            {downloaded ? (
              <FaDownload
                size={22}
                className="text-green-600 transition-colors duration-300"
              />
            ) : (
              <FaDownload size={22} />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
