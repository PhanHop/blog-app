import { getNewsDetail } from "@/api/new";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsDetail } from "@/types/listNewsCategories";
type QueryParams = {
  id?: string;
};
export const fetchNewDetail = createAsyncThunk<NewsDetail, QueryParams>(
  `/TinTucHeThong/GetChiTietTinTuc`,
  async ({ id }, thunkAPI) => {
    try {
      const res = await getNewsDetail(id);
      return res.data?.data || {};
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch news.");
    }
  }
);
