import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import Button from '@/components/Button/Button';
import style from '@/styles/addboard.module.css';
import FileInput from '@/components/FileInput/FileInput';

const Addboard: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const handleChangeTitle = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTitle(value);
    }, 400),
    []
  );

  const handleChangeContent = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setContent(value);
    }, 400),
    []
  );

  useEffect(() => {
    if (title && content) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content]);

  const handleSubmit = () => {
    console.log('폼 제출 함수 작성');
  };

  const handleImageChange = (file: File | null) => {
    setImgFile(file);
  };

  return (
    <div>
      <div className={style.TitleAndButton}>
        <h3>게시글 쓰기</h3>
        <Button onClick={handleSubmit} text="등록" disabled={disabled} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={style.FormTitle}>
            <label htmlFor="title">*제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={handleChangeTitle}
            />
          </div>
          <div className={style.FormContent}>
            <label htmlFor="content">*내용</label>
            <input
              id="content"
              type="text"
              placeholder="내용을 입력해주세요"
              onChange={handleChangeContent}
            />
          </div>
          <div className={style.FormImg}>
            <div>이미지</div>
            <FileInput onChange={handleImageChange} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addboard;
