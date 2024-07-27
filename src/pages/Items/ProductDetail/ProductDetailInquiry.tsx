import { ChangeEvent } from "react";

interface Props {
  inquiryValue: string;
  setInquiryValue: (value: string) => void;
}

const ProductDetailInquiry = ({
  inquiryValue,
  setInquiryValue,
}: Props) => {
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryValue(e.target.value);
  };

  return (
    <section className="product-inquiry-section">
      <label htmlFor="inquiry">문의하기</label>
      <textarea
        name="inquiry"
        id="inquiry"
        value={inquiryValue}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        onChange={handleChangeTextarea}
      />
      <div className="inquiry-btn-wrap">
        <button type="button" disabled={!!inquiryValue}>
          등록
        </button>
      </div>
    </section>
  );
};

export default ProductDetailInquiry;
