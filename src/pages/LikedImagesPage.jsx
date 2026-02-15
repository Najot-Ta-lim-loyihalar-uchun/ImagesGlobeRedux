import React from "react";

import { useSelector } from "react-redux";

function LikedImagesPage() {
  const data = useSelector((state) => state.images);
  console.log(data);

  return <div>LikedImagesPage</div>;
}

export default LikedImagesPage;
