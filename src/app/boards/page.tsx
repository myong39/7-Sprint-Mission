import axios from "@/lib/axios";
import {AllArticlesSection} from "@/components/AllArticlesSection";

export default async function Board() {
  const response = await axios.get("/articles");
  const articles = response.data.list ?? [];

  if (!articles) {
    return <div>게시글을 불러오는 중입니다.</div>
  }

  return (
    <>
      <h1>베스트 게시글</h1>
      <AllArticlesSection articles={articles} />
    </>
  );
}