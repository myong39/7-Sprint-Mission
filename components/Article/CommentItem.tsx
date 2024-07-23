import { Comment } from '@/types/Article';
import Image from 'next/image';
import formatTimeDiff from '@/util/formatTimeDiff';
import profile from '@/asset/images/profile1.png';
import style from './CommentItem.module.css';

const CommentItem: React.FC<Comment> = ({ content, createdAt, writer }) => {
  const date = formatTimeDiff(createdAt);

  return (
    <div className={style.CommentConatainer}>
      <div className={style.Content}>{content}</div>
      <div className={style.UserInfo}>
        <div className={style.ProfileImgConatainer}>
          {writer.image ? (
            <Image
              src={writer.image}
              alt={'UserProfileImg'}
              className={style.UserImg}
            />
          ) : (
            <Image
              src={profile}
              alt={'BasicUserProfile'}
              className={style.UserImg}
            />
          )}
        </div>
        <div className={style.NicknameAndDate}>
          <div className={style.UserName}>{writer.nickname}</div>
          <div className={style.UploadedDate}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
