import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import axios from '@/lib/axios';
import { formatDate } from '@/utils/formatDate';
import styles from '@/components/BestPost.module.css';
import bestPostImg from '@/assets/images/bestPostImg.svg';
import likeIcon from '@/assets/images/icons/likeIcon.svg';

export default function BestPost() {
  const [list, setList] = useState([]);

  async function getList() {
    const res = await axios.get('articles', {
      params: {
        page: 1,
        pageSize: 3,
        orderBy: 'like',
      },
    });
    setList(res.data.list);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styles.bestPostContainer}>
      <span className={styles.postSubject}>베스트 게시글</span>
      <div className={styles.postWrapper}>
        {list.map((post) => (
          <div key={post.id} className={styles.postContentWrapper}>
            <div className={styles.postContent}>
              <Image
                src={bestPostImg}
                width={102}
                height={30}
                alt='best post badge'
              />
              <div className={styles.postInfo}>
                <Link href={`/board/${post.id}`} className={styles.postTitle}>
                  {post.title}
                </Link>
                <div
                  className={classNames(styles.postImgContainer, {
                    [styles.imgPresent]: post.image,
                    [styles.imgAbsent]: !post.image,
                  })}
                >
                  {post.image && (
                    <Image
                      className={styles.postImg}
                      src={post.image}
                      width={72}
                      height={72}
                      alt='thumbnail'
                    />
                  )}
                </div>
              </div>
              <div className={styles.postDetails}>
                <div className={styles.postMeta}>
                  <span className={styles.nickname}>
                    {post.writer.nickname}
                  </span>
                  <div className={styles.likeCount}>
                    <Image
                      src={likeIcon}
                      width={16}
                      height={16}
                      style={{ width: 16, height: 16 }}
                      alt='like icon'
                    />
                    <div>{post.likeCount}</div>
                  </div>
                </div>
                <span className={styles.createdAt}>
                  {formatDate(post.createdAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
