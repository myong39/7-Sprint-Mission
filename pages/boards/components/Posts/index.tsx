import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import getPosts from "@/pages/api/Api";
import PostElement from "./PostElement";
import Input from "./Input";
import WriteButton from "./Button";

interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  updatedAt: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { list } = await getPosts({
          page: 1,
          pageSize: 10,
          orderBy: "recent",
        });
        setPosts(list);
      } catch (error) {
        console.error("Error fetching best posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["post-header"]}>
          <p className={styles["title"]}>게시글</p>
          <WriteButton />
        </div>
        <Input />
        <div className={styles["posts-container"]}>
          {posts.map((post: Post) => (
            <PostElement key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
