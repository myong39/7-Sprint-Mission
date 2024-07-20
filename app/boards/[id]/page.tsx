"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchArticleById, fetchArticleComments } from "@/api/articles";
import { Article, Comment } from "@/types/article";
import Profile from "@/assets/images/icons/ic_profile.svg";
import Heart from "@/assets/images/icons/ic_heart.svg";
import BackIcon from "@/assets/images/icons/ic_back.svg";
import EmptyComments from "@/assets/images/ui/empty-reply.svg";
import formatTimeDiff from "@/utils/formatTimeDiff";
import Button from "@/components/Button";
import Link from "next/link";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (id) {
      fetchArticle();
      fetchComments();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const data = await fetchArticleById(Number(id));
      setArticle(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const data = await fetchArticleComments(Number(id));
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    alert("댓글 등록");
    setNewComment("");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!article) return null;

  return (
    <div className='max-w-[1200px] mx-auto py-4 px-6'>
      <h1 className='text-xl font-bold my-4 text-gray-800'>{article.title}</h1>
      <div className='flex items-center mb-4 font-normal'>
        <div className='mr-2'>
          <Image
            src={Profile}
            alt='profile'
            width={24}
            height={24}
            className='inline-block'
          />
        </div>
        <span className='mr-2 text-gray-600 text-sm'>
          {article.writer.nickname}
        </span>
        <span className='text-gray-400 text-xs'>
          {new Date(article.createdAt).toLocaleDateString()}
        </span>
        <div className='w-px h-6 bg-gray-200 mx-4'></div>
        <span className='flex items-center text-gray-500 text-sm font-normal'>
          <Image
            src={Heart}
            alt='likes'
            width={16}
            height={16}
            className='inline-block mr-1'
          />
          {article.likeCount}
        </span>
      </div>
      <div className='border-t border-gray-200 pt-4'>
        <div className='mb-16 text-gray-800 text-base font-normal'>
          {article.content}
        </div>
      </div>
      <h2 className='text-base font-semibold mb-4'>댓글 달기</h2>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        className={`w-full py-4 px-6 rounded-xl bg-gray-100 h-[104px] text-base font-normal resize-none ${
          newComment ? "text-black" : "text-gray-400"
        }`}
        placeholder='댓글을 입력해주세요.'
      />
      <div className='flex justify-end mt-4 mb-6'>
        <Button
          text='등록'
          color={!newComment.trim() ? "disabled" : "default"}
          size='small'
          onClick={handleCommentSubmit}
          disabled={!newComment.trim()}
          width='74px'
        />
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className='border-b border-gray-200 pt-4'>
              <div className='bg-[#FCFCFC] pb-4'>
                <div className='mb-6 text-gray-800 text-sm font-normal'>
                  {comment.content}
                </div>
                <div className='flex items-center mb-2'>
                  <div className='mr-2'>
                    <Image
                      src={Profile}
                      alt='profile'
                      width={32}
                      height={32}
                      className='inline-block'
                    />
                  </div>
                  <div className='flex flex-col font-normal text-xs'>
                    <span className='mr-2 text-gray-600'>
                      {comment.writer.nickname}
                    </span>
                    <span className='mr-2 text-gray-400'>
                      {formatTimeDiff(comment.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='flex justify-center flex-col items-center  text-gray-400 font-normal text-base'>
            <Image
              src={EmptyComments}
              alt='No comments'
              width={150}
              height={150}
            />
            <div className='text-base font-normal text-center mt-4'>
              <p>아직 댓글이 없어요,</p>
              <p>지금 댓글을 달아보세요!</p>
            </div>
          </div>
        )}
        <div className='flex justify-center my-10'>
          <Link href='/boards'>
            <Button
              text='목록으로 돌아가기'
              color='default'
              size='small'
              width='240px'
              borderRadius='40px'
              fontSize='18px'
              fontWeight='600'
              padding='12px 38.5px'
              icon={<Image src={BackIcon} alt='Back' width={24} height={24} />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
