import {
  useState,
  useEffect,
  KeyboardEvent,
  FormEvent,
  ChangeEvent,
  FocusEvent,
} from "react";
import ItemTag from "./ItemTag";
import { formatNumberWithComma } from "@/utils/Utils";
import FileInput from "./FileInput";
import "./AddItemPage.css";

const AddItemPage = () => {
  // form 데이터 객체
  const [itemIntroduction, setFormData] = useState({
    itemTitle: { value: "", isValid: false },
    itemIntro: { value: "", isValid: false },
    itemPrice: { value: "", isValid: false },
    itemTag: { value: [] as string[], isValid: false },
  });

  // 파일 정보
  const [fileValue, setFileValue] = useState<File | null>(null);
  // 폼 inputs 모든 유효성 검사
  const isFormValid = Object.values(itemIntroduction).every(
    (input) => input.isValid
  );

  // tag 배열 정보과 유효성 업데이트
  const updateTagAndValidity = (newTagArray: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      itemTag: { value: newTagArray, isValid: newTagArray.length > 0 },
    }));
  };

  const handleChange = (
    e: FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    const trimmedValue = value.trim();

    setFormData((prevData) => ({
      ...prevData,
      [id]: { value, isValid: trimmedValue !== "" },
    }));
  };

  const handleTagChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 앞 뒤 빈칸 제거
      const inputElement = e.target as HTMLInputElement;
      const newValue = inputElement.value.trim();
      // 새로운 값이 비어있지 않은 경우에만 처리
      if (newValue) {
        // 빈 칸을 기준으로 분할하여 각각의 값을 태그로 추가
        // 새로운 태그들이 태그 배열에 포함되어 있지 않은 경우만
        const newTags: string[] = newValue
          .split(" ")
          .filter(
            (tag: string) => !itemIntroduction.itemTag.value.includes(tag)
          );
        if (newTags.length > 0) {
          const newTagArray = [...itemIntroduction.itemTag.value, ...newTags];
          updateTagAndValidity(newTagArray);
        }
      }
      // 작업 완료 후 빈칸으로 초기화
      inputElement.value = "";
    }
  };

  const handleTagCancel = (tagValue: string) => {
    const newTagArray = itemIntroduction.itemTag.value.filter(
      (value) => value !== tagValue
    );
    updateTagAndValidity(newTagArray);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputPrice = e.target.value;

    // 판매 가격 숫자만 입력 및 세자릿수마다 콤마 추가
    const formattedPrice = formatNumberWithComma(inputPrice);

    setFormData((prevData) => ({
      ...prevData,
      itemPrice: { value: formattedPrice, isValid: formattedPrice !== "" },
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleFileChange = (file: File | null) => {
    setFileValue(() => file);
  };

  useEffect(() => {}, [itemIntroduction]);

  return (
    <section className="add-item-page">
      <form onSubmit={handleSubmit}>
        <div className="add-item-bar">
          <h1>상품 등록하기</h1>
          <button className="button" disabled={!isFormValid}>
            등록
          </button>
        </div>
        <h2 id="item-img-h2">상품 이미지</h2>
        <FileInput
          name="imgFile"
          value={fileValue}
          onChange={handleFileChange}
        />
        <h2>상품명</h2>
        <input
          id="itemTitle"
          className=""
          placeholder="상품명을 입력해주세요"
          onBlur={handleChange}
        />
        <h2>상품 소개</h2>
        <textarea
          id="itemIntro"
          placeholder="상품소개를 입력해주세요"
          onBlur={handleChange}
        />
        <h2>판매가격</h2>
        <input
          id="itemPrice"
          value={itemIntroduction.itemPrice.value}
          placeholder="판매가격을 입력해주세요"
          onChange={handlePriceChange}
          onBlur={handleChange}
        />
        <h2>태그</h2>
        <input
          id="itemTag"
          placeholder="태그를 입력해주세요"
          onKeyDown={handleTagChange}
        />
        <div className="tag-wrapper">
          {itemIntroduction.itemTag.value.map((value, index) => (
            <ItemTag key={index} value={value} onCancel={handleTagCancel} />
          ))}
        </div>
      </form>
    </section>
  );
};

export default AddItemPage;
