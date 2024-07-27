import inquiryImg from "../../../assets/Img_inquiry_empty.svg";
import { Comment } from "./ProductDetail";

interface Props {
  comments: Comment[];
}

function timeAgo(dateString: string): string {
  const now = new Date();
  const pastDate = new Date(dateString);
  const secondsAgo = Math.floor((now.getTime() - pastDate.getTime()) / 1000);

  const units = [
    { name: "년", seconds: 31536000 },
    { name: "개월", seconds: 2592000 },
    { name: "일", seconds: 86400 },
    { name: "시간", seconds: 3600 },
    { name: "분", seconds: 60 },
    { name: "초", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name} 전`;
    }
  }

  return "방금 전";
}

const ProductDetailComments = ({ comments }: Props) => {
  return (
    <section className="product-comment-section">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div className="product-comment-wrap" key={comment.id}>
            <p className="product-comment">{comment.content}</p>
            <div className="product-profile-wrap">
              <img
                src={comment.writer.image}
                alt="프로필이미지"
                className="product-profile-img"
              />
              <div>
                <div className="product-profile-name">
                  {comment.writer.nickname}
                </div>
                <span className="product-profile-time">
                  {timeAgo(comment.updatedAt)}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="product-inquiry-img-wrap">
          <img src={inquiryImg} alt="문의이미지" />
          <div>아직 문의가 없습니다.</div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailComments;
