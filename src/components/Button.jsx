import React from "react";

function Button({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className={`w-full mt-[25px] px-6 py-3 bg-green-500 text-white border-none rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:bg-green-600 hover:scale-101 ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
