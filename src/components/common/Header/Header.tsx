import { useGetListNews } from "@/hook/useGetListNews";
import React from "react";
import Container from "../../Container";

export default function Header() {
  const { data } = useGetListNews();
  return (
    <Container className="flex items-center gap-x-5">
      {data?.map((item) => {
        return (
          <div key={item?.id} className="py-3 font-medium">
            {item?.tenDanhMuc}
          </div>
        );
      })}
    </Container>
  );
}
