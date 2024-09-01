import { getFormatTime, getElapsedTime } from "@/utils/Utils";
import { CommentType } from "@/types/ArticleTypes";
import styles from "./Commtent.module.scss";
import defaultProfileImg from "@/assets/images/icons/ic_user.svg";
import MenuDropdown from "../Dropdown/MenuDropdown";
import { useConfirm } from "../ConfirmPopup";
import { MENU_OPTION } from "@/types/UiTypes";
import { useLocation } from "react-router-dom";
import useDeleteProduct from "@/hooks/useDeleteProduct";

const Comment: React.FC<{ comment: CommentType }> = ({
  comment: {
    id,
    content,
    writer: { image, nickname },
    createdAt,
  },
}) => {
  const location = useLocation();
  const elapsedTime = getElapsedTime(createdAt);
  const formattedTime = getFormatTime(createdAt);
  const profileImg = image ? image : defaultProfileImg;

  const { confirm, ConfirmPopupComponent } = useConfirm();

  const { mutate: deleteComment } = useDeleteProduct({
    onSuccessRedirectTo: location.pathname.startsWith("/items")
      ? "/items"
      : "/boards",
    productUrl: "comments",
  });

  const handleOrderChange = async (option: string) => {
    if (option === MENU_OPTION.EDIT) {
    } else if (option === MENU_OPTION.DELETE) {
      const result = await confirm(
        "정말로 이 항목을 삭제하시겠습니까?",
        "삭제",
        "취소"
      );
      if (result) {
        deleteComment(id);
      }
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles["comment-content-Wrapper"]}>
        <p>{content}</p>
        <div className={styles["kebab-image"]}>
          <MenuDropdown
            onOrderChange={handleOrderChange}
            items={[MENU_OPTION.EDIT, MENU_OPTION.DELETE]}
          />
        </div>
      </div>
      <div className={styles["writer-wrapper"]}>
        <img src={profileImg} alt={`${nickname}의 프로필 사진`} />
        <div className={styles["nickname-wrapper"]}>
          <h3>{nickname}</h3>
          <h4>
            {formattedTime} {`(${elapsedTime})`}
          </h4>
        </div>
      </div>
      <div className={styles["horizontal-divider"]}></div>
      {ConfirmPopupComponent}
    </div>
  );
};

export default Comment;
