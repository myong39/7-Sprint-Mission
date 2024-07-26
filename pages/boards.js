import BestPost from '@/components/BestPost';
import NormalPost from '@/components/NormalPost';
import Container from '@/components/Container';
import Nav from '@/components/Nav';
import styles from '@/styles/boards.module.css';

export default function Boards() {
  return (
    <>
      <Nav />
      <Container>
        <div className={styles.container}>
          <BestPost />
          <NormalPost />
        </div>
      </Container>
    </>
  );
}
