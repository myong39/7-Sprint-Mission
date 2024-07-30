import { useEffect, useState, useCallback } from "react";
import { getItemDetail, getComments } from "../../api/item";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ItemDetailPage.module.css";
import ItemDetail from "./components/ItemDetail";
import CommentSection from "./components/CommentSection";
import { Item, Comment } from "../../types/types";
import { Button } from "../../components/Button/Button";

const initialItem: Item = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  tags: [],
  images: [],
  favoriteCount: 0,
};

const ItemDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [item, setItem] = useState<Item>(initialItem);
  const [comments, setComments] = useState<Comment[]>([]);
  const navigate = useNavigate();

  const loadItem = useCallback(async () => {
    if (productId) {
      try {
        const newItem = await getItemDetail(productId);
        setItem(newItem);
      } catch (error) {
        console.error(error);
      }
    }
  }, [productId]);

  const loadComments = useCallback(async () => {
    if (productId) {
      try {
        const newComments = await getComments(productId);
        setComments(newComments);
      } catch (error) {
        console.error(error);
      }
    }
  }, [productId]);

  useEffect(() => {
    loadItem();
  }, [productId, loadItem]);

  useEffect(() => {
    loadComments();
  }, [productId, loadComments]);

  const pageBack = () => {
    navigate("/items");
  };

  if (!productId) {
    return <div>상품 정보가 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <ItemDetail item={item} />
      <CommentSection
        comments={comments}
        productId={productId}
        reloadComments={loadComments}
      />
      <div className={styles.backButton}>
        <Button
          text='목록으로 돌아가기'
          size='large'
          width=''
          onClick={pageBack}
        />
      </div>
    </div>
  );
};

export default ItemDetailPage;
