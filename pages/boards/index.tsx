import BestArticleList from "@/components/boards/BestArticleList";
import AllArticleList from "@/components/boards/AllArticleList";
import styles from "@/components/boards/Freeboard.module.scss";
import { ArticleProps } from "@/types/articleTypes";
import { getArticle } from "@/lib/articleApi";

const ORDERBY = "recent";
const PAGESIZE = 10;
const REVALIDATE = 10;

export async function getStaticProps() {
  try {
    const bestRes = await getArticle({ orderBy: ORDERBY, pageSize: PAGESIZE });
    const initialArticles = bestRes.list ?? [];

    return {
      props: {
        initialArticles,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialArticles: [],
      },
      revalidate: REVALIDATE,
    };
  }
}

export default function Freeboard({ initialArticles }: ArticleProps) {
  return (
    <div className={styles.main}>
      <BestArticleList />
      <AllArticleList initialArticles={initialArticles} />
    </div>
  );
}
