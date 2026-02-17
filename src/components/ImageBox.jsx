import React from "react";

/* assets && icons */
import { FaHeart, FaRegHeart, FaDownload, FaRegEye } from "react-icons/fa";

/* rtk */
import { useDispatch } from "react-redux";
import { likeImage, saveImage } from "../toolkit/features/images/imageSlice";
import { Link } from "react-router-dom";

function ImageBox({ item }) {
  const { id, img, liked, downloaded } = item;
  const dispatch = useDispatch();

  return (
    <div key={id} className="relative group hover:scale-102 cursor-pointer">
      <img src={img} alt={id} className="w-full h-full object-cover" />
      <div
        onClick={() => dispatch(likeImage(id))}
        className={`
            absolute top-5 right-5 
               w-11 h-11 
               rounded-full 
               bg-white/20
               backdrop-blur-md 
               shadow-md 
               flex items-center justify-center 
               ${liked ? "opacity-100" : "opacity-0"}
               group-hover:opacity-100
               transition-all duration-300
               hover:scale-110 active:scale-95
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
            absolute bottom-5 right-5 
               w-11 h-11 
               rounded-full 
               bg-white/20
               backdrop-blur-md 
               shadow-md 
               flex items-center justify-center 
               ${downloaded ? "opacity-100" : "opacity-0"}
               group-hover:opacity-100
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

      <Link
        to={`${id}`}
        className={`
            absolute top-5 left-5 
               w-11 h-11 
               rounded-full 
               bg-white/20
               backdrop-blur-md 
               shadow-md 
               flex items-center justify-center 
              opacity-0
               group-hover:opacity-100
               hover:text-blue-300
               transition-all duration-300
               hover:scale-110 active:scale-95
            `}
      >
        <FaRegEye />
      </Link>
    </div>
  );
}

export default ImageBox;
