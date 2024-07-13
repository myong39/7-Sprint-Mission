import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import getPosts from "@/pages/api/Api";
import BestPostElement from "./BestPostElement";

interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  updatedAt: string;
}

export default function BestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestPost = async () => {
      try {
        const { list } = await getPosts({
          page: 1,
          pageSize: 3,
          orderBy: "like",
        });
        setPosts(list);
      } catch (error) {
        console.error("Error fetching best posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBestPost();
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["title"]}>베스트 게시글</p>
        <div className={styles["best-posts-container"]}>
          {posts.map((post: Post) => (
            <BestPostElement key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
