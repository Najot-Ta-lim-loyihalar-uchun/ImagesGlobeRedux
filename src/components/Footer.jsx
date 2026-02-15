/* Assets && icons */
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdImageSearch } from "react-icons/md";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container px-4 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Link to={"/"} className="flex items-end gap-3">
            <MdImageSearch className="text-6xl text-blue-500" />

            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              Rend | Pictures
            </h2>
          </Link>
          <p className="text-gray-400 text-sm">
            High quality images at your fingertips.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white">Follow Us</h3>
          <div className="flex gap-3 mt-1">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 transition-colors"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-granpy-500 text-sm">
        &copy; 2026 Rend | Pictures. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
