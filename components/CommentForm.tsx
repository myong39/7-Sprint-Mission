import InputTextArea from './input/InputTextArea';
import styles from '@/components/CommentForm.module.scss';
import Button from './button/Button';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

type TComment = {
  content: string;
};

const initialValue: TComment = {
  content: '',
};

function CommentForm() {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState<TComment>(initialValue);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e: MouseEvent | FormEvent) => {
    e.preventDefault();
    console.log(commentValue); // 아직 POST 구현 안해서 확인용 콘솔로그
  };

  useEffect(() => {
    const isCheck = commentValue.content.trim() !== '';
    setIsFilled(isCheck);
  }, [commentValue]);

  return (
    <form className={styles['comment-form']} onSubmit={handleSubmit}>
      <div className={styles['comment-wrapper']}>
        <label htmlFor='comment'>댓글달기</label>
        <InputTextArea
          id='comment'
          name='content'
          value={commentValue.content}
          title='댓글'
          onChange={handleCommentChange}
        />
      </div>
      <div className={styles['btn-wrapper']}>
        <Button
          type='button'
          size='small'
          disabled={!isFilled}
          onClick={handleSubmit}
        >
          등록
        </Button>
      </div>
    </form>
  );
}

export default CommentForm;
