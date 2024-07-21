import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../types/article";
import Profile from "@/assets/images/icons/ic_profile.svg";
import Heart from "@/assets/images/icons/ic_heart.svg";

const AllArticleCard: React.FC<Article> = ({
  id,
  title,
  createdAt,
  writer,
  image,
  likeCount,
}) => {
  return (
    <Link
      href={`/boards/${id}`}
      className='flex flex-col border-b border-gray-200 pt-6 '
    >
      <div className='bg-[#FCFCFC] pb-6'>
        <div className='flex items-start w-full'>
          <div className='flex-grow h-12'>
            <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
          </div>
          <div className='ml-4 flex-shrink-0'>
            {image && (
              <div className='w-[72px] h-[72px] bg-white flex items-center justify-center ml-2 p-3 border border-gray-100 rounded-md'>
                <div className='relative w-12 h-12 p-3'>
                  <Image
                    src={image}
                    alt='article-image'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <div className='text-gray-400 text-sm flex items-center'>
            <Image src={Profile} alt='profile' width={24} />
            <span className='ml-2 text-gray-600'>{writer.nickname}</span>
            <span className='ml-2'>
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className='text-gray-500 flex items-center'>
            <Image src={Heart} alt='heart' width={14} />
            <span className='ml-1'>{likeCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllArticleCard;
