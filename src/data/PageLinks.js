/* icons */
import { FaFileDownload, FaHome } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

export const links = [
  {
    to: "/",
    name: "Home",
    icon: FaHome,
    color: "blue",
  },
  {
    to: "downloads",
    name: "Downloads",
    icon: FaFileDownload,
    color: "green",
  },
  {
    to: "liked",
    name: "Liked",
    icon: AiOutlineLike,
    color: "red",
  },
];
