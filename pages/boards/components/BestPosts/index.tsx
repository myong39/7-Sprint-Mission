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
      <p className={styles["title"]}>베스트 게시글</p>
      {posts.map((post: Post) => (
        <BestPostElement key={post.id} post={post} />
      ))}
    </>
  );
}
