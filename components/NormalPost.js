import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from '@/lib/axios';
import { formatDate } from '@/utils/formatDate';
import Dropdown from '@/components/Dropdown';
import SearchForm from '@/components/SearchForm';
import ActiveBtn from '@/components/ActiveBtn';
import styles from '@/components/NormalPost.module.css';
import profileIcon from '@/assets/images/icons/profileIcon.svg';
import likeIcon from '@/assets/images/icons/likeIcon.svg';
import classNames from 'classnames';

export default function NormalPost() {
  const [list, setList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('recent');

  const router = useRouter();
  const { keyword } = router.query;

  async function getList(orderBy, searchQuery) {
    try {
      const res = await axios.get('articles', {
        params: {
          page: 1,
          orderBy: orderBy,
          keyword: searchQuery,
        },
      });
      console.log(res.data);
      setList(res.data.list);
    } catch (error) {
      console.error('Failed to fetch list:', error);
    }
  }

  useEffect(() => {
    getList(selectedOption, keyword);
  }, [selectedOption, keyword]);

  return (
    <div className={styles.normalPostContainer}>
      <div className={styles.normalPostHeader}>
        <span className={styles.postSubject}>게시글</span>
        <Link href='/addboard'>
          <ActiveBtn className={styles.writingBtn} children='글쓰기' />
        </Link>
      </div>
      <div className={styles.searchBarAndPostList}>
        <div className={styles.searchSortGroup}>
          <SearchForm />
          <Dropdown
            selectedOption={selectedOption}
            onOptionSelect={(value) => {
              console.log(value);
              setSelectedOption(value);
            }}
            items={[
              {
                label: '최신순',
                value: 'recent',
              },
              {
                label: '좋아요순',
                value: 'like',
              },
            ]}
          />
        </div>
        <div className={styles.postContainer}>
          {list.map((post) => (
            <div key={post.id} className={styles.postWrapperContainer}>
              <div className={styles.postContentWrapper}>
                <div className={styles.postContent}>
                  <div className={styles.postInfo}>
                    <Link
                      href={`/board/${post.id}`}
                      className={styles.postTitle}
                    >
                      {post.title}
                    </Link>
                    <div
                      className={classNames({
                        [styles.postImgContainer]: post.image,
                        [styles.postImg]: post.image,
                      })}
                    >
                      {post.image && (
                        <Image
                          className={styles.postImg}
                          src={post.image}
                          width={48}
                          height={48}
                          style={{ objectFit: 'contain' }}
                          alt='thumbnail'
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.postMeta}>
                    <div className={styles.postDetails}>
                      <Image
                        src={profileIcon}
                        width={24}
                        height={24}
                        alt='profile image'
                      />
                      <>
                        <span className={styles.nickname}>
                          {post.writer.nickname}
                        </span>
                        <span className={styles.createdAt}>
                          {formatDate(post.createdAt)}
                        </span>
                      </>
                    </div>
                    <div className={styles.likeCountWrapper}>
                      <Image
                        src={likeIcon}
                        width={24}
                        height={24}
                        alt='like icon'
                      />
                      <div className={styles.likeCount}>
                        <div>{post.likeCount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
