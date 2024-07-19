import axios from "@/lib/axios";
import {AllArticlesSection} from "@/components/AllArticlesSection";
import {BestArticlesSection} from "@/components/BestArticlesSection";
import {Article, ArticleListResponse, ArticleSortOption} from "@/types/articleTypes";
import {useState} from "react";

export default async function Board() {
  const allArticlesResponse = await axios.get("/articles");
  const allArticles = allArticlesResponse.data.list ?? [];

  const bestArticlesResponse = await axios.get("/articles", { params: { pageSize: 3, orderBy: "like" } });
  const bestArticles = bestArticlesResponse.data.list ?? [];

  if (!bestArticles || !allArticles) {
    return <div>게시글을 불러오는 중입니다.</div>
  }

  return (
    <>
      <BestArticlesSection articles={bestArticles} />
      <AllArticlesSection articles={allArticles} />
    </>
  );
}