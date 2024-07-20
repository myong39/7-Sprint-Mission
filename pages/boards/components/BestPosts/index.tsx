import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import getPosts from "@/pages/api/Api";
import BestPostElement from "./BestPostElement";
import debounce from "lodash-es/debounce";
interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  updatedAt: string;
  image?: string;
}

export default function BestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(3);
  const BREAKPOINTS = {
    DESKTOP: 1200,
    TABLET: 768
  }
  useEffect(() => {
    const fetchBestPost = async () => {
      try {
        const { list } = await getPosts({
          page: 1,
          pageSize: pageSize,
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
  }, [pageSize]);
  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= BREAKPOINTS.DESKTOP) {
        setPageSize(3);
      } else if (window.innerWidth >= BREAKPOINTS.TABLET && window.innerWidth < BREAKPOINTS.DESKTOP) {
        setPageSize(2);
      } else if (window.innerWidth < BREAKPOINTS.TABLET) {
        setPageSize(1);
      }
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <p className={styles["title"]}>베스트 게시글</p>
        <div className={styles["best-posts-container"]}>
          {posts.slice(0, pageSize).map((post: Post) => (
            <BestPostElement key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
