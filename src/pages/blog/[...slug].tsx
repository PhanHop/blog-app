import React from "react";
import NewsDetail from "@/container/NewsDetail";
import { useRouter } from "next/router";
import PageLayout from "@/layout/PageLayout";
import Header from "@/components/common/Header/Header";
export default function Blog() {
  const router = useRouter();
  const id = router.query?.slug?.[0];
  return (
    <PageLayout header={<Header />}>
      <NewsDetail id={id} />
    </PageLayout>
  );
}
