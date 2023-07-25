import { fetchNewDetail } from "@/store/actions/newsDetail";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import Container from "@/components/Container";
import Image from "next/image";
type Props = {
  id?: string;
};

export default function NewsDetail({ id }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewDetail({ id }) as any);
  }, [dispatch, id]);
  const data = useSelector((state: RootState) => state.newsDetail.newDetail);
  return (
    <Container className="mt-4">
      <div>
        <div className="text-4xl font-medium">{data?.tieuDe}</div>
        <div className="flex gap-x-2 items-center mt-4">
          <div className="w-14 h-14 relative">
            <Image
              src={data?.anhDaiDien || ""}
              layout="fill"
              alt="anh"
              className="relative rounded-[30px]"
              objectFit="cover"
            />
          </div>
          <div className="font-medium items-center">
            {data?.tacGia || "Dang cap nhat"}
          </div>
        </div>
        <div className="text-sm mt-2">{data?.ngayTao}</div>
      </div>
      <div className="font-medium text-xl mt-5">{data?.tomTat}</div>
      <div>{data?.nguonTin}</div>
      <div dangerouslySetInnerHTML={{ __html: data?.noiDung || "" }} />
    </Container>
  );
}
