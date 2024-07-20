import React, { useEffect, useState, useCallback } from 'react';
import style from '@/styles/boards.module.css';
import Dropdown from '@/components/Dropdown/Dropdown';
import { getArticle, getBestArticle } from '@/lib/axios';
import { ArticleResponse } from '@/lib/axios';
import BestArticle from '@/components/Article/BestArticle';
import Button from '@/components/Button/Button';
import AllArticle from '@/components/Article/AllArticle';

const Boards = () => {
  const [bestArticle, setBestArticle] = useState<ArticleResponse['list']>([]); // 베스트 게시글
  const [allArticle, setAllArticle] = useState<ArticleResponse['list']>([]); // 일반 게시글
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchBestArticles = async () => {
      const articles = await getBestArticle(3);
      setBestArticle(articles);
    };
    fetchBestArticles();
  }, []);

  useEffect(() => {
    const fetchAllArticle = async () => {
      const articles = await getArticle(page, pageSize, orderBy, keyword);
      setAllArticle(articles);
    };
    fetchAllArticle();
  }, [page, pageSize, orderBy, keyword]);

  const handleButtonClick = () => {
    console.log('hi');
  };

  const handleDropdownChange = (selectedOption: string) => {
    setOrderBy(selectedOption === '최신순' ? 'recent' : 'like');
    setPageSize(5);
    setAllArticle([]);
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    setPage(1);
    setAllArticle([]);
  };

  return (
    <div className={style.OutContainer}>
      <div className={style.BoardsConatiner}>
        <h1 className={style.BestTitle}>베스트 게시글</h1>
        <div className={style.BestArticleContainer}>
          {bestArticle.map((article) => (
            <BestArticle key={article.id} {...article} />
          ))}
        </div>
        <div className={style.ArticleAndPostLine}>
          <h1>게시글</h1>
          <Button onClick={handleButtonClick} text={'글쓰기'} />
        </div>
        <div className={style.ArticleNavBar}>
          <input
            type="text"
            placeholder="🔍 검색할 상품을 입력해주세요"
            onChange={handleKeywordChange}
          />
          <Dropdown
            options={['최신순', '좋아요 순']}
            onChange={handleDropdownChange}
          />
        </div>
        <div className={style.AllArticleContainer}>
          {allArticle.map((article) => (
            <AllArticle key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boards;
