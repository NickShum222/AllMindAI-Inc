import React from "react";

const Action = () => {
  return (
    <div class="md:py-48 py-24 flex flex-col items-center justify-center gap-y-8">
      <div class="size-20 flex items-center justify-center bg-aviato_green *:rounded-2xl rounded-[16px]">
        <svg
          class="h-7 *:fill-aviato_highlight"
          viewBox="0 0 49 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.2515 18.5649L0.41412 0.176025L45.171 14.5622C46.9097 15.1211 48.0888 16.7385 48.0889 18.5649H46.4757C42.5268 18.5649 38.8466 20.5652 36.6988 23.8789C34.0756 27.9261 28.9752 29.5813 24.4753 27.8457L24.2515 27.7593L0.41412 18.5649H24.2515Z"></path>
        </svg>
      </div>
      <h2 class="text-center lg:text-[64px] md:text-5xl md:leading-[56px] tracking-[-0.04em] text-balance lg:px-64  lg:leading-[76px] text-4xl leading-[48px]">
        Get the clearest picture of what's next in private markets
      </h2>

      <button
        class="px-9 h-[71px] rounded-full bg-aviato_green text-white flex items-center justify-center font-medium tracking-[-0.02em] cursor-pointer text-2xl"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R6ufn3a:"
        data-state="closed"
      >
        Get a demo
      </button>
    </div>
  );
};

export default Action;
