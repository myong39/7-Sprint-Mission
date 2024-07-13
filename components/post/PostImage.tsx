import Image from 'next/image';
import styles from './Post.module.scss';

function PostImage({ image, title }: { image: string; title: string }) {
  return (
    <div className={styles.image}>
      <Image src={image} alt={title} fill />
    </div>
  );
}
export default PostImage;
