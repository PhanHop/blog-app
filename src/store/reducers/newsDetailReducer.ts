import { NewsDetail } from "@/types/listNewsCategories";
import { createSlice } from "@reduxjs/toolkit";
import { fetchNewDetail } from "../actions/newsDetail";
interface News {
  newDetail: NewsDetail;
  loading: boolean;
  error: string | null;
}
const initState: News = {
  newDetail: {},
  loading: false,
  error: null,
};
const newsDetailSlice = createSlice({
  name: "news detail",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewDetail.pending, (state, payload) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewDetail.fulfilled, (state, payload) => {
        state.loading = false;
        state.newDetail = payload.payload;
      })
      .addCase(fetchNewDetail.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.error.message || "Error";
      });
  },
});
export default newsDetailSlice.reducer;
