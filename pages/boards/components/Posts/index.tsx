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
  image?: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { list } = await getPosts({
          page: 1,
          pageSize: 40,
          orderBy: orderBy,
        });
        setPosts(list);
        setFilteredPosts(list);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [orderBy]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const handleOrderChange = (value: string) => {
    setOrderBy(value);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["post-header"]}>
          <p className={styles["title"]}>게시글</p>
          <WriteButton />
        </div>
        <div className={styles["input-and-dropdown"]}>
          <Input
            onSearch={handleSearch}
            placeholder="검색할 키워드를 입력해주세요"
          />
          <DropDown onChange={handleOrderChange} />
        </div>
        <div className={styles["posts-container"]}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredPosts.map((post: Post) => (
              <PostElement key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
