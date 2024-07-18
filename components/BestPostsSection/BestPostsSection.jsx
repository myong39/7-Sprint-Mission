import React, { useEffect, useState } from "react";
import styles from "./BestPostsSection.module.scss";
import BestPostCard from "../BestPostCard/BestPostCard";
import { getPost } from "../api";

// export const getStaticProps = async () => {
//   const BestPostsData = await getPost({
//     page: 1,
//     pageSize: 3,
//     orderBy: "like",
//   });
//   const bestPosts = BestPostsData.list;

//   return {
//     props: {
//       bestPosts,
//     },
//   };
// };

const BestPostsSection = () => {
  const [bestPosts, setBestPosts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const getPageSize = () => {
    if (windowWidth > 1199) {
      setPageSize(3);
    }
    if (windowWidth < 1199 && windowWidth > 744) {
      setPageSize(2);
    }
    if (windowWidth < 744) {
      setPageSize(1);
    }
  };

  const handleLoad = async () => {
    const BestPostsData = await getPost({
      page: 1,
      pageSize: pageSize,
      orderBy: "like",
    });
    setBestPosts(BestPostsData.list);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleLoad();
  }, [pageSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    getPageSize();
  }, [windowWidth]);

  return (
    <>
      <div className={styles["best-posts-section-container"]}>
        <h2 className={styles["best-posts-section-title"]}>베스트 게시글</h2>
        <div className={styles["best-posts-section-cards"]}>
          {bestPosts.map((item, index) => (
            <BestPostCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestPostsSection;
