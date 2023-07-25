import Container from "@/components/Container";
import NewsItem from "@/components/News/NewsItem";
import { News } from "@/types/listNewsCategories";
import { ImageList, ImageListItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { RootState, useAppDispatch } from "@/store/store";
import { fetchNewsList, fetchNewsListThunk } from "@/store/actions/newsAction";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListNews() {
  const dispatch = useAppDispatch();
  const listNews = useSelector((state: RootState) => state.newsList.newsList);
  useEffect(() => {
    dispatch(fetchNewsListThunk());
  }, [dispatch]);
  const [limit, setLimit] = useState(16);
  const fetchMore = async () => {
    const newLimit = limit + 8;
    const news = await dispatch(fetchNewsList({ limit: newLimit }));
    setLimit(newLimit);
  };
  if (listNews?.length === 0) {
    return null;
  }
  return (
    <Container className="pt-10">
      <InfiniteScroll
        dataLength={limit}
        next={fetchMore}
        hasMore={true}
        loader={<p>Loading more news...</p>}
      >
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={4}
          rowHeight={121}
          className="items-center"
        >
          {listNews.map((item, index) => {
            if (index < 4)
              return (
                <ImageListItem
                  style={{ height: "auto" }}
                  key={item?.id}
                  cols={index === 0 ? 3 : 1}
                  rows={index === 0 ? 3 : 1}
                  className="!aspect-[16/9] !w-full"
                >
                  <NewsItem
                    image={item?.anhDaiDien}
                    title={item?.tieuDe}
                    size={index === 0 ? "large" : "small"}
                    id={item?.id}
                  />
                </ImageListItem>
              );
            return (
              <ImageListItem
                style={{ height: "auto" }}
                key={item?.id}
                cols={1}
                rows={1}
                className="!aspect-[16/9] !w-full"
              >
                <NewsItem
                  image={item?.anhDaiDien}
                  title={item?.tieuDe}
                  size={"small"}
                  id={item?.id}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </InfiniteScroll>
    </Container>
  );
}
