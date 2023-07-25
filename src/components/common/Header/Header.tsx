import { useGetListNews } from "@/hook/useGetListNews";
import React from "react";
import Container from "../../Container";

export default function Header() {
  const { data } = useGetListNews();
  return (
    <Container className="flex items-center gap-x-5 sticky top-0 z-10 bg-white border-b-[1px] border-stone-200">
      {data?.map((item) => {
        return (
          <div key={item?.id} className="py-3 font-medium hover:cursor-pointer hover:text-blue-600">
            {item?.tenDanhMuc}
          </div>
        );
      })}
    </Container>
  );
}
