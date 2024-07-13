import BestPostList from '@/components/post/BestPostList';
import Button from '@/components/button/Button';
import PostList from '@/components/post/PostList';
import SectionTitle from '@/components/SectionTitle';

import SearchForm from '@/components/SearchForm';
import Dropdown from '@/components/Dropdown';

import styles from '@/styles/BoardsPage.module.scss';
import useArticles from '@/lib/useArticles';

function BoardPage() {
  const { order, setOrder } = useArticles();

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
            <SearchForm />
            <Dropdown order={order} setOrder={setOrder} />
          </div>
          <PostList />
        </div>
      </main>
    </>
  );
}

export default BoardPage;
