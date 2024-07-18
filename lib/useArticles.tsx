import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/router';

function useArticles() {
  const [articles, setArticles] = useState<IPost[]>([]);
  const [order, setOrder] = useState<TOrder>('recent');
  const router = useRouter();
  const { q } = router.query;

  const handleLoadBestPostList = async (order: TOrder, q: string) => {
    try {
      const query = q
        ? `/articles?page=1&pageSize=10&orderBy=${order}&keyword=${q}`
        : `/articles?page=1&pageSize=10&orderBy=${order}`;
      const res = await axios.get(query);
      const articles = res.data.list;
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadBestPostList(order, q as string);
  }, []);

  return { articles, order, setOrder, q, handleLoadBestPostList };
}

export default useArticles;
