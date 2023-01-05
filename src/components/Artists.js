import React from "react";

import artist1 from "../images/artist1.jpg";
import artist2 from "../images/artist2.jpg";
import artist3 from "../images/artist3.jpg";
import artist4 from "../images/artist4.jpg";
import artist5 from "../images/artist5.jpg";

const Artists = () => {
  const artists = [
    { image: artist1, css: "" },
    { image: artist2, css: "" },
    { image: artist3, css: "relative z-30 scale-125" },
    { image: artist4, css: "z-20" },
    { image: artist5, css: "" },
  ];

  return (
    <div className="flex flex-col items-center px-3 mt-12">
      <div className="flex items-center -space-x-6">
        {artists.map((artist, index) => (
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 ${artist.css}`}
            key={index}
          >
            <img
              className="w-full h-full object-cover rounded-full"
              key={index}
              src={artist.image}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="py-6 sm:pt-10 text-[16px]">
        <p>Subscribe to the Playlist</p>
        <div className="flex justify-center my-2">
          <div className="flex justify-center cursor-pointer bg-white/75 hover:bg-white/50 duration-200 text-black text-[15px] rounded-full py-1.5 px-4">
            <button className="">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
