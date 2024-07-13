import styles from './styles.module.scss';

interface Post  {
    id: number;
    title: string;
    writer: { nickname: string };
    likeCount: number;
    updatedAt: string;
  }

  interface PostElementProps {
    post: Post;
  }

  export default function PostElement({post}: PostElementProps){
    return(
        <>
        <p>{post.title}</p>
        <p>{post.writer.nickname}</p>
        <p>{post.likeCount}</p>
        <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
        </>
    )
  }