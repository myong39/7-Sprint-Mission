import React from "react";
import styles from "./index.module.scss";
import BestPostsSection from "@/components/BestPostsSection/BestPostsSection";
import Header from "@/components/Header/Header";
import PostSection from "@/components/PostsSection/PostSection";

const boards = () => {
  return (
    <div className={styles["boards-container"]}>
      <Header />
      <BestPostsSection />
      <PostSection />
    </div>
  );
};

export default boards;
