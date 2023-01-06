import React from "react";
import { useSelector } from "react-redux";

import RecommendCard from "./RecommendCard";

// import recommended1 from "../images/recommended1.jpg";
// import recommended2 from "../images/recommended2.jpg";
// import recommended3 from "../images/recommended3.jpg";
// import recommended4 from "../images/recommended4.jpg";
// import recommended5 from "../images/recommended5.jpg";

const Recommended = () => {
  // const recommendedSongs = [
  //   { title: "Juvenile", author: "The Blaze", cover: recommended1 },
  //   { title: "First Time", author: "Kygo", cover: recommended2 },
  //   { title: "La Ciudad", author: "Odesza", cover: recommended3 },
  //   { title: "The XX", author: "Laurent Zen", cover: recommended4 },
  //   { title: "Someday", author: "One Republic", cover: recommended5 },
  // ];

  const recommendedSongs = useSelector((state) => state.recommended);

  return (
    <div className="px-3 mt-12 mx-auto">
      {/* Title */}
      <div className="flex items-center">
        <div>
          <p className="text-[14px] uppercase md:text-[18px] -mb-3">
            Best of Trending
          </p>
          <p className="text-[28px] md:text-[32px] font-bold">Recommended</p>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-6">
        {recommendedSongs.map((recommendedSong, index) => (
          <RecommendCard
            key={index}
            title={recommendedSong.title}
            author={recommendedSong.author}
            cover={recommendedSong.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
