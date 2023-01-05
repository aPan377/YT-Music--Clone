import React from "react";
import Song from "./Song";

import { MdLibraryMusic } from "react-icons/md";

import cover1 from "../images/cover1.jpg";
import cover2 from "../images/cover2.jpg";
import cover3 from "../images/cover3.jpg";
import cover4 from "../images/cover4.jpg";
import cover5 from "../images/cover5.jpg";
import cover6 from "../images/cover6.jpg";
import cover7 from "../images/cover7.jpg";

const Trending = () => {
  const songs = [
    { title: "Leave a night on", author: "Tom Walker", cover: cover1 },
    { title: "Sky and Sand", author: "Paul Kalkbrenner", cover: cover2 },
    { title: "Number", author: "Foals", cover: cover3 },
    { title: "My Own Soul's Warning", author: "The Killers", cover: cover4 },
    { title: "Nothing Left To Say", author: "Imagine Dragons", cover: cover5 },
    { title: "Spring Day", author: "BTS", cover: cover6 },
    { title: "Bleu", author: "Worakls", cover: cover7 },
  ];

  return (
    <div className="px-3 mt-12 mx-auto">
      {/* Title */}
      <div className="flex items-center">
        <div>
          <p className="text-[14px] uppercase md:text-[18px] -mb-3">
            most popular songs now
          </p>
          <p className="text-[28px] md:text-[35px] font-bold">Trending</p>
        </div>
        <MdLibraryMusic className="text-[28px] md:text-[33px]" />
      </div>
      {/* Songs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-6">
        {songs.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            author={song.author}
            cover={song.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
