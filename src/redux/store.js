import { configureStore } from "@reduxjs/toolkit";
import recommendedSlice from "./recommendedSlice";
import trendingSlice from "./trendingSlice";

const store = configureStore({
  reducer: {
    trending: trendingSlice,
    recommended: recommendedSlice,
  },
});

export default store;
