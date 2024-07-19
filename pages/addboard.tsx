import Button from '@/components/button/Button';
import FileInput from '@/components/input/FileInput';
import Input from '@/components/input/Input';
import InputTextArea from '@/components/input/InputTextArea';
import SectionTitle from '@/components/SectionTitle';
import styles from '@/styles/AddBoard.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';

const initialValues: PostArticleType = {
  title: '',
  content: '',
};

function AddBoardPage() {
  const [isfilled, setIsFilled] = useState<boolean>(false);
  const [values, setValues] = useState<PostArticleType>(initialValues);

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 여기에서 <HTMLInputElement> 와 <HTMLTextAreaElement> 이 부분만 다른데 <T> 이런식으로 할 방법은 없을까요..?!!
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleInputTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log(values); // 아직 POST 구현 안해서 확인용 콘솔로그
  };

  useEffect(() => {
    const isCheck = values.title.trim() !== '' && values.content.trim() !== '';
    setIsFilled(isCheck);
  }, [values]);

  return (
    <main className={styles.main}>
      <form>
        <div className={styles['main-header']}>
          <SectionTitle>게시글 쓰기</SectionTitle>
          <Button size='small' disabled={!isfilled} handleClick={handleSubmit}>
            등록
          </Button>
        </div>
        <div className={styles['content']}>
          <div className={styles['input-wrapper']}>
            <label htmlFor='title'>* 제목</label>
            <Input
              id='title'
              name='title'
              title='제목'
              value={values.title}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles['input-wrapper']}>
            <label htmlFor='content'>* 내용</label>
            <InputTextArea
              id='content'
              name='content'
              title='내용'
              value={values.content}
              onChange={handleInputTextAreaChange}
            />
          </div>

          <div className={styles['input-wrapper']}>
            <label htmlFor='content'>이미지</label>
            <FileInput
              id='image'
              name='image'
              value={values.image}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default AddBoardPage;
