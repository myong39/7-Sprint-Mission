import React, { useEffect, useState } from 'react';
import style from '@/styles/boards.module.css';
import Dropdown from '@/components/Dropdown/Dropdown';
import { getBestArticle } from '@/lib/axios';
import { BestArticleResponse } from '@/lib/axios';
import '@/components/Article/BestArticle';
import BestArticle from '@/components/Article/BestArticle';

const Boards = () => {
  const [bestArticle, setBestArticle] = useState<BestArticleResponse['list']>(
    []
  );

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getBestArticle(3);
      setBestArticle(articles);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <div className={style.BoardsConatiner}>
        <h1>베스트 게시글</h1>
        <div>
          {bestArticle.map((article) => (
            <BestArticle key={article.id} {...article} />
          ))}
        </div>
        <div>
          <h1>게시글</h1>
          <button>글쓰기</button>
        </div>
        <div>
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
          <Dropdown />
        </div>
        <div>게시글 들어갈 자리</div>
      </div>
    </div>
  );
};

export default Boards;
