import Board from '@/components/board/Board';
import Button from '@/components/button/Button';
import CommentList from '@/components/comment/CommentList';
import CommentForm from '@/components/CommentForm';
import axios from '@/lib/axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: any) {
  const articleId = context.params['id'];

  const resArticle = await axios.get(`/articles/${articleId}`);
  const article = resArticle.data;

  const resComments = await axios.get(
    `/articles/${articleId}/comments?limit=10`
  );
  const commentList = resComments.data.list;

  return {
    props: {
      article,
      commentList,
    },
  };
}

function BoardDetailPage({
  article,
  commentList,
}: {
  article: IPost;
  commentList: IComment[];
}) {
  const router = useRouter();

  return (
    <main>
      <Board article={article} />
      <CommentForm />
      <CommentList commentList={commentList} />
      <div className='btn-wrapper'>
        <Button
          className='back-btn'
          size='medium'
          type='button'
          onClick={() => router.back()}
        >
          목록으로 돌아가기
          <Image src='/images/ic_back.svg' alt='back' width={24} height={24} />
        </Button>
      </div>
    </main>
  );
}

export default BoardDetailPage;
