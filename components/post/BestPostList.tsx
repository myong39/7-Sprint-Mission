import { useEffect, useState } from 'react';
import BestPost from './BestPost';
import axios from '@/lib/axios';
import SectionTitle from '@/components/SectionTitle';
import useBestArticles from '@/lib/useBestArticles';

function BestPostList() {
  const { articles } = useBestArticles();

  return (
    <div className='best-post'>
      <SectionTitle>베스트 게시글</SectionTitle>
      <div className='best-post-list'>
        {articles.map((article) => {
          return <BestPost key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
}
export default BestPostList;
