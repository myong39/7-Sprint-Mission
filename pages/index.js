import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/index.module.css';
import sectionImg1 from '@/assets/images/sectionImg1.png';
import sectionImg2 from '@/assets/images/sectionImg2.png';
import sectionImg3 from '@/assets/images/sectionImg3.png';
import landingBannerImg from '@/assets/images/landingBannerImg.png';
import bottomBannerImg from '@/assets/images/bottomBannerImg.png';
import facebookIcon from '@/assets/images/icons/facebookIcon.svg';
import twitterIcon from '@/assets/images/icons/twitterIcon.svg';
import youtubeIcon from '@/assets/images/icons/youtubeIcon.svg';
import instagramIcon from '@/assets/images/icons/instagramIcon.svg';
import LandingNav from '../components/LandingNav';

export default function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <LandingNav />
      <div>
        <header className={styles.landingBannerContainer}>
          <div className={styles.landingBannerContent}>
            <div className={styles.landingBannerTxtWrapper}>
              <span className={styles.landingBannerTxt}>
                일상의 모든 물건을
                <p className={styles.lineChange} />
                거래해 보세요
              </span>
              <Link href='/items' className={styles.itemsLink}>
                <button
                  className={styles.lookAroundBtn}
                  type='button'
                  onClick="location.href='items.html'"
                >
                  구경하러가기
                </button>
              </Link>
            </div>
            <Image
              className={styles.landingBannerImg}
              src={landingBannerImg}
              width={746}
              height={340}
              alt='landing banner image'
            />
          </div>
        </header>
        <main className={styles.mainContainer}>
          <div className={`${styles.gridItem} ${styles.imageItem}`}>
            <Image
              className={styles.sectionImg1}
              src={sectionImg1}
              width={588}
              height={444}
              alt='인기 상품 확인 이미지'
            />
          </div>
          <div className={`${styles.gridItem} ${styles.textItem}`}>
            <span className={styles.sectionLabel}>Hot item</span>
            <div className={styles.textItemWrapper}>
              <span className={styles.sectionTitle}>
                인기 상품을
                <p className={styles.mainLineChange} />
                확인해 보세요
              </span>
              <span className={styles.sectionContent}>
                가장 HOT한 중고거래 물품을
                <p />
                판다 마켓에서 확인해 보세요
              </span>
            </div>
          </div>
          <div
            className={`${styles.gridItem} ${styles.textItem} ${styles.rightAlign}`}
          >
            <span className={styles.sectionLabel}>Search</span>
            <div className={styles.textItemWrapper}>
              <span className={styles.sectionTitle}>
                구매를 원하는
                <p className={styles.mainLineChange} />
                상품을 검색하세요
              </span>
              <span className={styles.sectionContent}>
                구매하고 싶은 물품은 검색해서
                <p />
                쉽게 찾아보세요
              </span>
            </div>
          </div>
          <div className={`${styles.gridItem} ${styles.imageItem}`}>
            <Image
              className={styles.sectionImg2}
              src={sectionImg2}
              width={588}
              height={444}
              alt='메인_상품 검색 이미지'
            />
          </div>
          <div
            className={`${styles.gridItem} ${styles.imageItem} ${styles.sectionImg3}`}
          >
            <Image
              className={styles.sectionImg3}
              src={sectionImg3}
              width={588}
              height={444}
              alt='메인_상품 등록 이미지'
            />
          </div>
          <div
            className={`${styles.gridItem} ${styles.textItem} ${styles.section3Text}`}
          >
            <span className={styles.sectionLabel}>Register</span>
            <div className={styles.textItemWrapper}>
              <span className={styles.sectionTitle}>
                판매를 원하는
                <p className={styles.mainLineChange} />
                상품을 등록하세요
              </span>
              <span className={styles.sectionContent}>
                어떤 물건이든 판매하고 싶은 상품을
                <p />
                쉽게 등록하세요
              </span>
            </div>
          </div>
        </main>
        <div className={styles.bottomBannerContainer}>
          <div className={styles.bottomBannerContent}>
            <span className={styles.bottomBannerTxt}>
              믿을 수 있는
              <p />
              판다마켓 중고거래
            </span>
            <Image
              className={styles.bottomBannerImg}
              src={bottomBannerImg}
              width={746}
              height={397}
              alt='bottom banner image'
            />
          </div>
        </div>

        <footer className={styles.footerContainer}>
          <div className={styles.footerWrapper}>
            <div className={styles.corpInfo}>
              <div>
                <span className={styles.copyright}>©️codeit - 2024</span>
              </div>
              <div class={styles.info}>
                <Link className={styles.privacy} href='/privacy'>
                  Privacy Policy
                </Link>
                <Link className={styles.faq} href='/faq'>
                  FAQ
                </Link>
              </div>
            </div>
            <div className={styles.snsIcons}>
              <Link
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={facebookIcon}
                  width={20}
                  height={20}
                  alt='페이스북으로 연결되는 링크 아이콘'
                />
              </Link>
              <Link
                href='https://twitter.com/?lang=ko'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={twitterIcon}
                  width={20}
                  height={20}
                  alt='트위터로 연결되는 링크 아이콘'
                />
              </Link>
              <Link
                href='https://www.youtube.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={youtubeIcon}
                  width={20}
                  height={20}
                  alt='유튜브로 연결되는 링크 아이콘'
                />
              </Link>
              <Link
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={instagramIcon}
                  width={20}
                  height={20}
                  alt='인스타그램으로 연결되는 링크 아이콘'
                />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
