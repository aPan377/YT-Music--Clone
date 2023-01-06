import React from "react";
import Song from "./Song";

import { MdLibraryMusic } from "react-icons/md";

import { useSelector } from "react-redux";

const Trending = () => {
  const songs = useSelector((state) => state.trending);

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
