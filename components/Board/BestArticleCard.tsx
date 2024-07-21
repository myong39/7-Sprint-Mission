import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../types/article";
import BestBadge from "@/assets/images/icons/img_badge.svg";
import Heart from "@/assets/images/icons/ic_heart.svg";

const BestArticleCard: React.FC<Article> = ({
  id,
  title,
  image,
  likeCount,
  createdAt,
  writer,
}) => {
  return (
    <Link
      href={`/boards/${id}`}
      className='lg:h-[169px] h-[167px] rounded-lg overflow-hidden bg-gray-50 flex flex-col justify-between px-6 pb-4'
    >
      <div className='flex-grow'>
        <div className='mb-4'>
          <Image src={BestBadge} alt='best badge' width={102} />
        </div>
        <div className='flex justify-between mb-4'>
          <div className='font-semibold text-xl leading-8 text-gray-800 flex-grow'>
            {title}
          </div>
          {image && (
            <div className='w-18 h-18 bg-white flex items-center justify-center ml-2 p-3 border border-gray-200 rounded-md'>
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
      <div className='mt-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex font-normal text-sm'>
            <div className='text-gray-600 mr-2'>{writer.nickname}</div>
            <Image
              src={Heart}
              alt='heart'
              width={14}
              className='text-gray-500'
            />
            <div className='text-gray-500 ml-0.5'>{likeCount}</div>
          </div>
          <div className='text-gray-400 font-normal text-sm'>
            {new Date(createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BestArticleCard;
