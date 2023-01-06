import { createSlice } from "@reduxjs/toolkit";

import cover1 from "../images/cover1.jpg";
import cover2 from "../images/cover2.jpg";
import cover3 from "../images/cover3.jpg";
import cover4 from "../images/cover4.jpg";
import cover5 from "../images/cover5.jpg";
import cover6 from "../images/cover6.jpg";
import cover7 from "../images/cover7.jpg";

const trendingSlice = createSlice({
  name: "trending",
  initialState: [
    { title: "Leave a night on", author: "Tom Walker", cover: cover1 },
    { title: "Sky and Sand", author: "Paul Kalkbrenner", cover: cover2 },
    { title: "Number", author: "Foals", cover: cover3 },
    { title: "My Own Soul's Warning", author: "The Killers", cover: cover4 },
    { title: "Nothing Left To Say", author: "Imagine Dragons", cover: cover5 },
    { title: "Spring Day", author: "BTS", cover: cover6 },
    { title: "Bleu", author: "Worakls", cover: cover7 },
  ],
  reducers: {},
});

export default trendingSlice.reducer;
