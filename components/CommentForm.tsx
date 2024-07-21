import InputTextArea from './input/InputTextArea';
import styles from '@/components/CommentForm.module.scss';
import Button from './button/Button';

function CommentForm() {
  return (
    <form className={styles['comment-form']}>
      <div className={styles['comment-wrapper']}>
        <label htmlFor='comment'>댓글달기</label>
        <InputTextArea id='comment' name='comment' value='' title='댓글' />
      </div>
      <div className={styles['btn-wrapper']}>
        <Button size='small'>등록</Button>
      </div>
    </form>
  );
}

export default CommentForm;
