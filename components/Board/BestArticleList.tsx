"use client";
import { useState, useEffect } from "react";
import { Article } from "../../types/article";
import { fetchArticles } from "@/api/articles";
import BestArticleCard from "./BestArticleCard";

export default function BestArticleList() {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    fetchBestPosts();
  }, []);

  const fetchBestPosts = async () => {
    try {
      const bestArticles = await fetchArticles(1, 3, "like");
      setPosts(bestArticles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto py-6'>
      <h2 className='text-xl font-bold mb-6'>베스트 게시글</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
        {posts.map((article, index) => (
          <div
            key={article.id}
            className={`
              ${index === 0 ? "block" : "hidden sm:block"}
              ${index === 2 ? "hidden sm:hidden lg:block" : ""}
            `}
          >
            <BestArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
}
