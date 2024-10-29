import React from "react";

const index = ({children, className}) => {
  return (
    <button
      class={` duration-300 transition-all hover:bg-transparent border border-aviato_highlight hover:text-aviato_highlight ${className}`}
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="radix-:Raa6fn3a:"
      data-state="closed"
    >
      {children}
    </button>
  );
};

export default index;
