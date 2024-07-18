import BestPostList from '@/components/post/BestPostList';
import Button from '@/components/button/Button';
import PostList from '@/components/post/PostList';
import SectionTitle from '@/components/SectionTitle';

import SearchForm from '@/components/SearchForm';
import Dropdown from '@/components/Dropdown';

import styles from '@/styles/BoardsPage.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

function BoardPage() {
  const [order, setOrder] = useState<TOrder>('recent');
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <main className='board-main'>
        <BestPostList />
        <div className={styles.post}>
          <div className={styles.title}>
            <SectionTitle>게시글</SectionTitle>
            <Button size='small'>글쓰기</Button>
          </div>
          <div className={styles.search}>
            <SearchForm initialValue={(q as string) || ''} />
            <Dropdown order={order} setOrder={setOrder} />
          </div>
          <PostList order={order} q={q as string} />
        </div>
      </main>
    </>
  );
}

export default BoardPage;
