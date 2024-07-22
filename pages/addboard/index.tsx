import React from "react";
import styles from "./index.module.scss";
import Header from "@/components/Header/Header";
import PostForm from "@/components/PostForm/PostForm";

const addBoard = () => {
  return (
    <div className={styles["addboards-container"]}>
      <Header />
      <PostForm />
    </div>
  );
};

export default addBoard;
