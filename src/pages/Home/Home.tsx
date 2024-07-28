import { Link } from "react-router-dom";
import "./Home.css";
import SocialBtn from "./SocialBtn";
import instagram_ic from "../../assets/ic_instagram.png";
import facebook_ic from "../../assets/ic_facebook.png";
import twitter_ic from "../../assets/ic_twitter.png";
import youtube_ic from "../../assets/ic_youtube.png";
import home_top from "../../assets/Img_home_top.png";
import home_bottom from "../../assets/Img_home_bottom@2x.png";
import home_01 from "../../assets/Img_home_01@2x.png";
import home_02 from "../../assets//Img_home_02@2x.png";
import home_03 from "../../assets//Img_home_03@2x.png";

const Home = () => {
  return (
    <>
      <main>
        <section className="section1">
          <img
            className="bg-img"
            src={home_top}
            alt="판다이미지"
            width="996"
            height="447"
          />
          <div className="container">
            <h2>일상의 모든 물건을 거래해 보세요</h2>
            <Link to="/items" className="btn_large-link">
              <button type="button" className="btn_large">
                구경하러 가기
              </button>
            </Link>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <img src={home_01} alt="인기상품이미지" width="588" height="444" />
            <div>
              <div className="subtitle">Hot item</div>
              <h2 className="title">
                인기 상품을<span>&nbsp;</span>
                <br />
                확인해 보세요
              </h2>
              <p className="description">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className="container right">
            <img src={home_02} alt="검색이미지" width="588" height="444" />
            <div>
              <div className="subtitle">Search</div>
              <h2 className="title">
                구매를 원하는<span>&nbsp;</span>
                <br />
                상품을 검색하세요
              </h2>
              <p className="description">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <div className="container">
            <img src={home_03} alt="상품등록이미지" width="588" height="444" />
            <div>
              <div className="subtitle">Register</div>
              <h2 className="title">
                판매를 원하는<span>&nbsp;</span>
                <br />
                상품을 등록하세요
              </h2>
              <p className="description">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        <section className="section3">
          <img
            className="bg-img"
            src={home_bottom}
            alt="판다대화이미지"
            width="996"
            height="540"
          />
          <div className="container">
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
        </section>
      </main>
      <footer>
        <div className="f-container">
          <div className="pc-tablet-addr">©codeit - 2024</div>
          <div className="fnav">
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
          </div>
          <div className="sns">
            <SocialBtn
              url="https://www.facebook.com/"
              imgSrc={facebook_ic}
              altText="페이스북 아이콘"
            />
            <SocialBtn
              url="https://twitter.com/"
              imgSrc={twitter_ic}
              altText="트위터 아이콘"
            />
            <SocialBtn
              url="https://www.youtube.com/"
              imgSrc={youtube_ic}
              altText="유튜브 아이콘"
            />
            <SocialBtn
              url="https://www.instagram.com/"
              imgSrc={instagram_ic}
              altText="인스타그램 아이콘"
            />
          </div>
        </div>
        <div className="mobile-addr">©codeit - 2024</div>
      </footer>
    </>
  );
};

export default Home;
