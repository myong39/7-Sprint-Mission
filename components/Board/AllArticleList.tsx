"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Article } from "../../types/article";
import { fetchArticles } from "@/api/articles";
import searchIcon from "@/assets/images/icons/ic_search.svg";
import Button from "../Button";
import AllArticleCard from "./AllArticleCard";
import OrderDropdown from "../OrderDropdown";
import Link from "next/link";
import debounce from "lodash/debounce";

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "like", label: "좋아요순" },
];

export default function AllArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortType, setSortType] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadArticles = async (term: string) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newArticles = await fetchArticles(page, 10, sortType, term);
      if (newArticles.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prevArticles) =>
          page === 1 ? newArticles : [...prevArticles, ...newArticles],
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [articles, searchTerm],
  );

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setPage(1);
      setArticles([]);
      setHasMore(true);
      loadArticles(term);
    }, 500),
    [],
  );

  useEffect(() => {
    loadArticles(searchTerm);
  }, [sortType, page]);

  const handleSortChange = (value: string) => {
    setSortType(value);
    setPage(1);
    setArticles([]);
    setHasMore(true);
    loadArticles(searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  };

  const lastPostElementCallback = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <div className='max-w-[1200px] mx-auto py-4'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold'>게시글</h2>
        <Link href='/addboard'>
          <Button text='글쓰기' color='default' size='small' width='88px' />
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='검색할 내용을 입력해주세요'
          className='sm:mr-4 mr-2 py-[9px] pl-12 pr-5 rounded-xl bg-gray-100 w-full'
          style={{
            backgroundImage: `url(${searchIcon.src})`,
            backgroundSize: "24px 24px",
            backgroundPosition: "16px center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <OrderDropdown
          options={sortOptions}
          selected={sortType}
          onSelect={handleSortChange}
        />
      </div>
      {loading && <p className='text-center py-2'>검색 중...</p>}
      <div>
        {filteredArticles.map((article, index) => {
          if (index === filteredArticles.length - 1) {
            return (
              <div ref={lastPostElementCallback} key={article.id}>
                <AllArticleCard {...article} />
              </div>
            );
          } else {
            return <AllArticleCard key={article.id} {...article} />;
          }
        })}
      </div>
      {loading && <p className='text-center py-2'>Loading...</p>}
      {!hasMore && filteredArticles.length === 0 && (
        <p className='text-center py-4'>검색 결과가 없습니다</p>
      )}
      {!hasMore && filteredArticles.length > 0 && (
        <p className='text-center py-4'>게시글의 마지막입니다</p>
      )}
    </div>
  );
}
