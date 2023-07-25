export type NewCategory = {
  id?: string;
  tenDanhMuc?: string;
  thuTu?: number;
  kichHoat?: boolean;
  ngayTao?: string;
};
export type DataResponseType<T> = {
  code: number;
  data?: T;
  meta?: any;
};

export type Response<T> = Promise<DataResponseType<T>>;

export type NewCategoryRespone = {
  status?: number;
  message?: string;
  total?: number;
  data?: NewCategory[];
};
export type NewsResponse = {
  status?: number;
  message?: string;
  total?: number;
  data?: News[];
};

export type News = {
  id?: string;
  tieuDe?: string;
  tomTat?: string;
  anhDaiDien?: string;
  nguoiTao?: string;
  ngayTao?: string;
  urlChiTiet?: string;
  fileDinhKem?: any;
};
export type NewsDetail = {
  tieuDe?: string;
  tomTat?: string;
  noiDung?: string;
  anhDaiDien?: string;
  ngayTao?: string;
  tag?: string;
  nguonTin?: string;
  tacGia?: string;
  fileDinhKem?: string;
};
export type NewsDetailRes = {
  status?: number;
  message?: string;
  total?: number;
  data?: NewsDetail;
};
