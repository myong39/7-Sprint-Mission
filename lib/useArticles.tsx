import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

function useArticles() {
  const [articles, setArticles] = useState<IPost[]>([]);
  const [order, setOrder] = useState<TOrder>('recent');
  const router = useRouter();

  const handleLoadBestPostList = async (order: TOrder) => {
    try {
      const res = await axios.get(
        `/articles?page=1&pageSize=10&orderBy=${order}`
      );
      const articles = res.data.list;
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadBestPostList(order);
  }, [order]);

  return { articles, order, setOrder };
}

export default useArticles;
