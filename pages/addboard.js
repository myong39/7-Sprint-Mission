import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '@/styles/addboard.module.css';
import FileInput from '@/components/FileInput';
import Nav from '@/components/Nav';
import Container from '@/components/Container';
import { isFormValid } from '@/utils/isFormValid';

export default function addboard() {
  const [values, setValues] = useState({
    itemTitle: '',
    itemContent: '',
    imgFile: null,
  });

  const { imgFile, itemTitle, itemContent } = values;
  const requiredFields = ['itemTitle', 'itemContent'];

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <Nav />
      <Container>
        <form className={styles.pageContainer}>
          <div className={styles.titleContainer}>
            <span className={styles.titleDesktop}>상품 등록하기</span>
            <button
              type='submit'
              className={classNames(styles.registrationBtn, {
                [styles.active]: isFormValid(values, requiredFields),
              })}
              disabled={!isFormValid(values, requiredFields)}
            >
              등록
            </button>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.subject}>
              <label htmlFor='itemTitle'>*제목</label>
              <input
                id='itemTitle'
                className={styles.itemTitleInput}
                name='itemTitle'
                placeholder='제목을 입력해주세요'
                autoComplete='off'
                onChange={(e) => handleChange('itemTitle', e.target.value)}
              />
            </div>
            <div className={styles.content}>
              <label htmlFor='itemContent'>*내용</label>
              <input
                id='itemContent'
                className={styles.itemContentInput}
                name='itemContent'
                placeholder='내용을 입력해주세요'
                autoComplete='off'
                onChange={(e) => handleChange('itemContent', e.target.value)}
              ></input>
            </div>
            <div className={styles.image}>
              <span>이미지</span>
              <FileInput
                name='imgFile'
                value={imgFile}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
