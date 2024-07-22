import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/boardDetail.module.css";
import BoardDetailWrite from "@/components/BoardDetailWrite";
import BoardDetailInfo from "@/components/BoardDetailInfo";
import BoardDetailComments from "@/components/BoardDetailComments";
import { getArticleDetail, getComments } from "@/lib/api";
import { Articles, Comments } from "@/lib/type";
import back_ic from "@/public/ic_back.svg";

export default function BoardDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState<Articles>({
    content: "",
    createdAt: "",
    id: 0,
    image: "",
    likeCount: 0,
    title: "",
    updatedAt: "",
    writer: {
      id: 0,
      nickname: "",
    },
  });

  const [comments, setComments] = useState<Comments>({
    nextCursor: 0,
    list: [
      {
        writer: {
          image: "",
          nickname: "",
          id: 0,
        },
        updatedAt: "",
        createdAt: "",
        content: "",
        id: 0,
      },
    ],
  });

  useEffect(() => {
    const getArticlesApi = async () => {
      if (typeof id === "string") {
        const article = await getArticleDetail(id);
        const comments = await getComments(id);

        setComments(comments);
        setArticle(article);
      }
    };

    getArticlesApi();
  }, [id]);

  console.log(article);
  console.log("comments", comments);

  return (
    <div className={styles.container}>
      <section className={styles["info-section"]}>
        <BoardDetailInfo article={article} />
      </section>
      <section className={styles["write-section"]}>
        <BoardDetailWrite />
      </section>
      <section>
        <BoardDetailComments comments={comments} />
        <Link href="/board" className={styles["back-link"]}>
          <button type="button" className={styles["back-btn"]}>
            <span>목록으로 돌아가기</span>
            <Image src={back_ic} alt="뒤로가기아이콘" />
          </button>
        </Link>
      </section>
    </div>
  );
}
