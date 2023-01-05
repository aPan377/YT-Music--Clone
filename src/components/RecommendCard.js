import React from "react";

const RecommendCard = ({ title, author, cover }) => {
  return (
    <div className="cursor-pointer bg-gray-900/30 hover:bg-gray-900/80 duration-200">
      <div className="w-full h-[300px]">
        <img src={cover} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="text-[0.85rem] sm:text-[0.95rem] font-semibold py-4 ml-2">
        <p>{title}</p>
        <p className="text-[0.75rem] pt-1 sm:text-[0.8rem] font-serif">
          by {author}
        </p>
      </div>
    </div>
  );
};

export default RecommendCard;
