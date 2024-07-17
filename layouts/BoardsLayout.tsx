import { ReactNode } from 'react';
import Link from 'next/link';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Icons from '@/components/Icons';

interface BoardsLayoutPros {
  children: ReactNode;
}

export default function BoardsLayout({ children }: BoardsLayoutPros) {
  const [deviceType] = useMediaQuery();
  const isMobile = deviceType === 'Mobile';

  return (
    <>
      <section className="mb-6 xl:mb-10">
        <span className="sr-only">베스트 게시글</span>
        <h2 className="mb-4 text-lg font-bold text-gray-900 md:mb-6 md:text-xl">
          베스트 게시글
        </h2>
        {children}
      </section>
      <section>
        <span className="sr-only">전체 게시글</span>
        <div className="mb-4 flex items-center justify-between md:mb-12 xl:mb-6">
          <h2 className="text-lg font-bold text-gray-900 md:text-xl">게시글</h2>
          <Link href="#">
            <Button>글쓰기</Button>
          </Link>
        </div>
        <div className="mb-4 flex items-center justify-between gap-3 md:mb-10 md:gap-[6px] xl:mb-6 xl:gap-4">
          <label className="relative h-[42px] flex-grow">
            <span className="sr-only">게시물 검색하기</span>
            <Icons.Search className="absolute left-4 top-[9px] w-6" />
            <input
              className="h-full w-full rounded-xl bg-gray-100 pl-11 text-base font-normal"
              placeholder="검색할 게시글을 입력해주세요"
            />
          </label>
          <Dropdown>
            <Dropdown.Toggle>{getToggleContent(isMobile)}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item position="first">최신순</Dropdown.Item>
              <Dropdown.Item position="last">좋아요순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ul className="flex w-full flex-col gap-6">모든 게시글</ul>
      </section>
    </>
  );
}

const getToggleContent = (isMobile: boolean) => {
  return isMobile ? (
    <Icons.Sort className="w-6" />
  ) : (
    <>
      최신순
      <Icons.CaretDown className="w-6" />
    </>
  );
};
