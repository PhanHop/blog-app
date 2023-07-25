import { getNewListCategories } from "@/api/new";
import useSWR from "swr";
export function useGetListNews(
  type?: string,
  skip?: number,
  limit?: number,
  name?: string
) {
  const queryKey = `/DanhMucTinTuc/GetDanhSachDanhMucTinTuc?skip=${skip}&limit=${limit}&loai_nguoi_dung=${type}&ten_danh_muc=${name}`;
  const { data, error } = useSWR(
    queryKey,
    () => getNewListCategories(type, skip, limit, name),
    { revalidateOnFocus: false }
  );
  return {
    data: data?.data?.data,
    isLoading: !error && !data,
  };
}
