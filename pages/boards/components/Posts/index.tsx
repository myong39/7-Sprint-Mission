// Posts.tsx
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import getPosts from "@/pages/api/Api";
import PostElement from "./PostElement";
import Input from "./Input";
import WriteButton from "./Button";
import DropDown from "./DropDown";

interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  updatedAt: string;
  image?: string; // 추가된 필드
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("recent");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { list } = await getPosts({
          page: 1,
          pageSize: 40,
          orderBy: orderBy,
        });
        setPosts(list);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [orderBy]);

  const handleOrderChange = (value: string) => {
    setOrderBy(value);
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["post-header"]}>
          <p className={styles["title"]}>게시글</p>
          <WriteButton />
        </div>
        <Input />
        <DropDown onChange={handleOrderChange} />
        <div className={styles["posts-container"]}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post: Post) => <PostElement key={post.id} post={post} />)
          )}
        </div>
      </div>
    </>
  );
}
