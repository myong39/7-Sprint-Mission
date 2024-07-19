import Button from '@/components/button/Button';
import InputWrapper from '@/components/InputWrapper';
import SectionTitle from '@/components/SectionTitle';
import styles from '@/styles/AddBoard.module.scss';

function AddBoardPage() {
  return (
    <main className={styles.main}>
      <div className={styles['main-header']}>
        <SectionTitle>게시글 쓰기</SectionTitle>
        <Button size='small'>등록</Button>
      </div>
      <div className={styles['content']}>
        <InputWrapper id='title' name='제목' primary />
        <InputWrapper id='content' name='내용' primary area />
        <InputWrapper id='image' name='이미지' file />
      </div>
    </main>
  );
}

export default AddBoardPage;
