import { createSlice } from "@reduxjs/toolkit";

import recommended1 from "../images/recommended1.jpg";
import recommended2 from "../images/recommended2.jpg";
import recommended3 from "../images/recommended3.jpg";
import recommended4 from "../images/recommended4.jpg";
import recommended5 from "../images/recommended5.jpg";

const recommendedSlice = createSlice({
  name: "recommended",
  initialState: [
    { title: "Juvenile", author: "The Blaze", cover: recommended1 },
    { title: "First Time", author: "Kygo", cover: recommended2 },
    { title: "La Ciudad", author: "Odesza", cover: recommended3 },
    { title: "The XX", author: "Laurent Zen", cover: recommended4 },
    { title: "Someday", author: "One Republic", cover: recommended5 },
  ],
  reducers: {},
});

export default recommendedSlice.reducer;
