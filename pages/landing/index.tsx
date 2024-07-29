import styles from "@/pages/landing/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import hotItem from "@/assets/images/img_hotItem.png";
import search from "@/assets/images/img_search.png";
import register from "@/assets/images/img_register.png";
import topBanner from "@/assets/images/img_home_top.svg";
import bottomBanner from "@/assets/images/img_home_bottom.svg";
import facebook from "@/assets/icons/social/ic_facebook.svg";
import instagram from "@/assets/icons/social/ic_instagram.svg";
import twitter from "@/assets/icons/social/ic_twitter.svg";
import youtube from "@/assets/icons/social/ic_youtube.svg";

function Landing() {
  return (
    <div className={styles["container"]}>
      <section className={styles["banner"]}>
        <div className={styles["banner-wrapper"]}>
          <div className={styles["banner-element"]}>
            <p className={styles["banner-title"]}>
              일상의 모든 물건을 거래해 보세요
            </p>
            <button className={styles["banner-button"]}>구경하러 가기</button>
          </div>
          <Image src={topBanner} alt="상단 배너" />
        </div>
      </section>
      <div className={styles["feature-container"]}>
        <section className={styles["feature-wrapper"]}>
          <article className={styles["feature-card"]}>
            <Image
              className={styles["feature-image"]}
              src={hotItem}
              alt="인기 상품"
              width={588}
            />
            <div className={styles["feature-element"]}>
              <span className={styles["feature-label"]}>Hot Item</span>
              <strong className={styles["feature-title"]}>
                인기 상품을 <br className={styles["feature-br"]} />
                확인해 보세요
              </strong>
              <p className={styles["feature-description"]}>
                가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
              </p>
            </div>
          </article>
        </section>

        <section className={styles["feature-reverse-wrapper"]}>
          <article className={styles["feature-card"]}>
            <Image
              className={styles["feature-image"]}
              src={search}
              alt="상품 검색"
              width={588}
            />
            <div className={styles["feature-element"]}>
              <span className={styles["feature-label"]}>Search</span>
              <strong className={styles["feature-title"]}>
                구매를 원하는 <br />
                상품을 검색하세요
              </strong>
              <p className={styles["feature-description"]}>
                구매하고 싶은 물픔은 검색해서 쉽게 찾아보세요
              </p>
            </div>
          </article>
        </section>

        <section className={styles["feature-wrapper"]}>
          <article className={styles["feature-card"]}>
            <Image
              className={styles["feature-image"]}
              src={register}
              alt="상품 등록"
              width={588}
            />
            <div className={styles["feature-element"]}>
              <span className={styles["feature-label"]}>Hot Item</span>
              <strong className={styles["feature-title"]}>
                판매를 원하는 <br />
                상품을 등록하세요
              </strong>
              <p className={styles["feature-description"]}>
                어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
              </p>
            </div>
          </article>
        </section>
      </div>

      <section className={styles["bottom-banner"]}>
        <div className={styles["bottom-banner-title-wrapper"]}>
          <p className={styles["bottom-banner-title"]}>믿을 수 있는</p>
          <p className={styles["bottom-banner-title"]}>판다마켓 중고 거래</p>
        </div>
        <Image src={bottomBanner} alt="하단 배너" />
      </section>

      <footer className={styles["footer-container"]}>
        <div className={styles["footer-wrapper"]}>
          <div className={styles["footer-copyright"]}>
            <Link
              className={styles["footer-copyright-wrapper"]}
              href={"/copyright"}
            >
              <span>@codeit - 2024</span>
            </Link>
          </div>
          <div className={styles["footer-faq"]}>
            <Link className={styles["footer-faq-wrapper"]} href={"/faq"}>
              <span>Privacy Policy</span>
              <span>FAQ</span>
            </Link>
          </div>
          <div className={styles["footer-social"]}>
            <Link
              href={"https://www.facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["social-image"]}
                src={facebook}
                alt="페이스북"
              />
            </Link>
            <Link
              href={"https://www.instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["social-image"]}
                src={instagram}
                alt="인스타그램"
              />
            </Link>
            <Link
              href={"https://x.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["social-image"]}
                src={twitter}
                alt="트위터"
              />
            </Link>
            <Link
              href={"https://www.youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["social-image"]}
                src={youtube}
                alt="유튜브"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
