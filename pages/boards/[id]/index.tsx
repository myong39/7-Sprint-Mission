import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { getPostById } from "@/components/api";
import Header from "@/components/Header/Header";
import PostDetailSection from "@/components/PostDetailSection/PostDetailSection";
import CommentForm from "@/components/CommentForm/CommentForm";

interface PostItem {
  content: string;
  image?: string;
  likeCount: number;
  title: string;
  createdAt: string;
  writer: {
    nickname: string;
  };
}

const PostDetail = () => {
  const [detailPost, setDetailPost] = useState<PostItem | null>(null);
  const router = useRouter();
  const { id } = router.query;

  const handleLoad = async () => {
    if (typeof id === "string") {
      const postId = parseInt(id);
      const postByIdData = await getPostById(postId);
      setDetailPost(postByIdData);
    }
  };

  useEffect(() => {
    handleLoad();
    console.log(detailPost);
  }, [id]);
  return (
    <>
      <div className={styles["post-detail-container"]}>
        <Header />
        {detailPost ? <PostDetailSection item={detailPost} /> : null}
        <CommentForm />
      </div>
    </>
  );
};

export default PostDetail;
