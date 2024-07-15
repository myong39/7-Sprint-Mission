import feature1 from "@/assets/images/home/feature1-image.png";
import feature2 from "@/assets/images/home/feature2-image.png";
import feature3 from "@/assets/images/home/feature3-image.png";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import "@/styles/Homepage.css";

const Homepage = () => {
  return (
    <>
      <main>
        <section id='top' className='banner'>
          <div className='banner-box'>
            <h1>
              일상의 모든 물건을&nbsp;
              <br />
              거래해 보세요
            </h1>
            <Link href='/items'>
              <Button text='구경하러 가기' color='default' size='large' />
            </Link>
          </div>
        </section>
        <section className='container'>
          <div className='content'>
            <Image src={feature1} alt='판다마켓 메인1' />
            <div className='content-box'>
              <h2 className='content-name'>Hot item</h2>
              <h1>
                인기 상품을&nbsp;
                <br />
                확인해 보세요
              </h1>
              <p className='content-description'>
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div id='right' className='content'>
            <div className='content-box'>
              <h2 className='content-name'>Search</h2>
              <h1>
                구매를 원하는
                <br />
                &nbsp;상품을 검색하세요
              </h1>
              <p className='content-description'>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <Image src={feature2} alt='판다마켓 메인2' />
          </div>
          <div className='content'>
            <Image src={feature3} alt='판다마켓 메인3' />
            <div className='content-box'>
              <h2 className='content-name'>Register</h2>
              <h1>
                판매를 원하는&nbsp;
                <br />
                상품을 등록하세요
              </h1>
              <p className='content-description'>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        <section id='bottom' className='banner'>
          <div className='banner-box'>
            <h1>
              믿을 수 있는&nbsp;
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
