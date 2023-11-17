import React from "react";
import StarsCanvas from "../canvas/Stars";

const Card = ({ title, description }) => {
  console.log(title);
  return (
    <div className="rounded-md hover:scale-105 transition-all duration-300 relative z-0 border border-neutral-800 bg-black p-8 text-center shadow">
      <div
        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
        style={{
          backgroundImage:
            "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
          borderColor: "rgb(93, 79, 240)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-bolt"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
        </svg>
      </div>
      <h3 className="mt-6 text-gray-400">{title}</h3>
      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
        {description}
      </p>
      <StarsCanvas />
    </div>
  );
};

export default Card;
