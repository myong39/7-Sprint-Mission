import Image from 'next/image';
import styles from './Post.module.scss';

// unoptimized를 넣으면 최적화가 되지않는다는 것을 아는데 게시글 중에 이미지 주소
// 이상한게 있어서 next config 를 아무리 수정해도 에러나길래 넣어놨습니다..!!ㅠㅠ
function PostImage({ imageURL, title }: { imageURL: string; title: string }) {
  return (
    <div className={styles.image}>
      <Image src={imageURL} alt={title} fill unoptimized />
    </div>
  );
}
export default PostImage;
