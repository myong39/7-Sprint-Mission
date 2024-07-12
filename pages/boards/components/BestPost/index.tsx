import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import getPosts from "@/pages/api/Api";

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
    const fetchBestPosts = async () => {
      try {
        const data = await getPosts({ pageSize: 3, orderBy: "like", page: 1 });
        setPosts(data);
      } catch (error) {
        console.error("Error fetching best posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <p>{post.title}</p>
          <p>{post.writer.nickname}</p>
          <p>{post.likeCount}</p>
          <p>{new Date(post.updatedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
