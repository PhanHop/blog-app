import Header from "@/components/common/Header/Header";
import ListNews from "@/container/ListNews";
import PageLayout from "@/layout/PageLayout";
import { store } from "@/store/store";
import { NewCategory, News } from "@/types/listNewsCategories";
import { Provider } from "react-redux";

type Data = {
  listNewsCategories?: NewCategory[];
  listNews?: News[];
};
export default function Home({ listNewsCategories, listNews }: Data) {
  return (
    <PageLayout header={<Header />}>
      <ListNews />
    </PageLayout>
  );
}

// export const getServerSideProps = async () => {
//   try {
//     const responseData = await getNewListCategories();
//     const newsRes = await getListNews({});
//     const listNewsCategoriesData = responseData?.data;
//     const listNews = newsRes?.data;
//     return {
//       props: {
//         listNewsCategories: listNewsCategoriesData || [],
//         listNews: listNews?.data || [],
//       },
//     };
//   } catch (error) {
//     console.log("error:", error);
//     return {};
//   }
// };
