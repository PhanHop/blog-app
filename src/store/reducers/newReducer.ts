import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsList } from "../actions/newsAction";
import { News } from "@/types/listNewsCategories";
interface NewsList {
  newsList: News[] ;
  loading: boolean;
  error: string | null;
}

const initialState: NewsList = {
  newsList: [],
  loading: false,
  error: null,
};
const newsListSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsList.fulfilled, (state, action) => {
        state.loading = false;
        state.newsList = action.payload;
      })
      .addCase(fetchNewsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});
export default newsListSlice.reducer;
