import { getListNews } from "@/api/new";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { News } from "@/types/listNewsCategories";
type QueryParams = {
  cap_don_vi?: string;
  loai_nguoi_dung?: string;
  ma_so?: string;
  ma_phong?: string;
  skip?: number;
  limit?: number;
  tieu_de?: string;
  danh_muc_tin_tuc_id?: string;
};
export const fetchNewsList = createAsyncThunk<News[], QueryParams>(
  `/TinTucHeThong/GetDanhSachTinTuc`,
  async (
    {
      cap_don_vi,
      loai_nguoi_dung,
      ma_so,
      ma_phong,
      skip,
      limit,
      tieu_de,
      danh_muc_tin_tuc_id,
    },
    thunkAPI
  ) => {
    try {
      const res = await getListNews({
        cap_don_vi,
        loai_nguoi_dung,
        ma_so,
        ma_phong,
        skip,
        limit,
        tieu_de,
        danh_muc_tin_tuc_id,
      });
      return res.data?.data || [];
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch news.");
    }
  }
);
export const fetchNewsListThunk = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchNewsList({}));
  } catch (error) {
    console.log(error);
  }
};
