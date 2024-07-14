import React from 'react';
import style from '@/styles/boards.module.css';
import Dropdown from '@/components/Dropdown/Dropdown';

const boards = () => {
  return (
    <div>
      <div className={style.BoardsConatiner}>
        <h1>베스트 게시글</h1>
        <div>베스트 아이템 들어갈 곳</div>
        <div>
          <h1>게시글</h1>
          <button>글쓰기</button>
        </div>
        <div>
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
          <Dropdown />
        </div>
        <div>게시글 들어갈 자리</div>
      </div>
    </div>
  );
};

export default boards;
