import React, { useEffect, useState } from "react";
import styles from "./PostSection.module.scss";
import PostCard from "../PostCard/PostCard";
import DropDown from "../DropDown/DropDown";
import { getPost } from "../api";

const dropdownList = ["최신순", "좋아요순"];

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyWord, setKeyWord] = useState("");

  const handleChangeInput = (e) => {
    setKeyWord(e.target.value);
  };

  const handleLoad = async () => {
    const postData = await getPost({
      page: 1,
      pageSize: 10,
      orderBy: orderBy,
      keyWord: keyWord,
    });
    setPosts(postData.list);
  };

  useEffect(() => {
    handleLoad();
  }, [orderBy, keyWord]);

  return (
    <div className={styles["post-section-container"]}>
      <div className={styles["post-section-title-with-button"]}>
        <h2>게시글</h2>
        <button>글쓰기</button>
      </div>
      <div className={styles["post-section-search-and-sort"]}>
        <input
          type="text"
          value={keyWord}
          onChange={handleChangeInput}
          placeholder="검색할 상품을 입력해주세요"
        />
        <DropDown list={dropdownList} onChange={setOrderBy} value={orderBy} />
      </div>
      <div className={styles["post-section-cards"]}>
        {posts.map((item, index) => (
          <PostCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PostSection;
