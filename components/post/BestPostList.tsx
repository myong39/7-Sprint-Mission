import BestPost from './BestPost';
import SectionTitle from '@/components/SectionTitle';

function BestPostList({ articles = [] }: { articles: IPost[] }) {
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
