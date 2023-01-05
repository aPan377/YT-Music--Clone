import React from "react";

const Song = ({ title, author, cover }) => {
  return (
    <div className="flex items-start cursor-pointer bg-gray-900/30 hover:bg-gray-900/80 duration-200">
      <div className="w-[100px] h-[80px] md:min-w-[100px] md:h-full md:min-h-[60px]">
        <img src={cover} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="text-[0.85rem] sm:text-[0.95rem] font-semibold mt-2 ml-6">
        <p>{title}</p>
        <p className="text-[0.8rem] pt-1 sm:text-[0.8rem] font-serif">
          &#x2022; {author}
        </p>
      </div>
    </div>
  );
};

export default Song;
