import React, { useEffect, useState } from "react";
import styles from "./BestPostsSection.module.scss";
import BestPostCard from "../BestPostCard/BestPostCard";
import { getPost } from "../api";

const SCREEN_SIZES = {
  LARGE: 1199,
  MEDIUM: 744,
};

const PAGE_SIZES = {
  LARGE: 3,
  MEDIUM: 2,
  SMALL: 1,
};

const BestPostsSection = () => {
  const [bestPosts, setBestPosts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const getPageSize = () => {
    if (windowWidth > SCREEN_SIZES.LARGE) {
      setPageSize(PAGE_SIZES.LARGE);
    }
    if (windowWidth < SCREEN_SIZES.LARGE && windowWidth > SCREEN_SIZES.MEDIUM) {
      setPageSize(PAGE_SIZES.MEDIUM);
    }
    if (windowWidth < SCREEN_SIZES.MEDIUM) {
      setPageSize(PAGE_SIZES.SMALL);
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
