import { useEffect, useState } from 'react';
import BestPost from './BestPost';
import axios from '@/lib/axios';
import SectionTitle from '@/components/SectionTitle';

function BestPostList() {
  const [articles, setArticles] = useState<IPost[]>([]);
  const [pageSize, setPageSize] = useState<string>('3');

  const handleLoadBestPostList = async (size: string) => {
    try {
      const res = await axios.get(
        `/articles?page=1&pageSize=${size}&orderBy=like`
      );
      const articles = res.data.list;
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 디바운스 수정 예정 ..
    const updatePageSize = () => {
      if (window.innerWidth <= 767) {
        setPageSize('1'); // 모바일 크기
      } else if (window.innerWidth <= 1199) {
        setPageSize('2'); // 태블릿 크기
      } else {
        setPageSize('3'); // 데스크탑 크기
      }
    };

    updatePageSize(); // 초기 페이지 크기 설정
    window.addEventListener('resize', updatePageSize); // 창 크기 변경 시 페이지 크기 업데이트

    return () => {
      window.removeEventListener('resize', updatePageSize);
    };
  });

  useEffect(() => {
    handleLoadBestPostList(pageSize);
  }, [pageSize]);

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
