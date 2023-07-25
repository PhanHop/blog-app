import { instance } from "./axiosInstance";
import {
  NewCategoryRespone,
  NewsDetailRes,
  NewsResponse,
  Response,
} from "@/types/listNewsCategories";

export type QueryParamsProps = {
  cap_don_vi?: string;
  loai_nguoi_dung?: string;
  ma_so?: string;
  ma_phong?: string;
  skip?: number;
  limit?: number;
  tieu_de?: string;
  danh_muc_tin_tuc_id?: string;
};
export function getListNews({
  cap_don_vi,
  loai_nguoi_dung,
  ma_so,
  ma_phong,
  skip,
  limit = 16,
  tieu_de,
  danh_muc_tin_tuc_id,
}: QueryParamsProps): Response<NewsResponse> {
  return instance.get(
    `/TinTucHeThong/GetDanhSachTinTuc?skip=${0}&limit=${limit}`
  );
}

export function getNewListCategories(
  type?: string,
  skip = 0,
  limit = 30,
  name?: string
): Response<NewCategoryRespone> {
  return instance.get(
    `DanhMucTinTuc/GetDanhSachDanhMucTinTuc?skip=${skip}&limit=${limit}`
  );
}

export function getNewsDetail(id?: string): Response<NewsDetailRes> {
  return instance.get(`/TinTucHeThong/GetChiTietTinTuc?id=${id}`);
}
