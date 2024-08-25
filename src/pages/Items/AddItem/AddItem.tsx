import { useState, useEffect, MouseEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";
import ImageInput from "./ImageInput";
import TagInput from "./TagInput";
import PriceInput from "./PriceInput";
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import { postAddItem, postUploadImage } from "../api";
import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../../../types/product";

export interface IsValid {
  name: boolean;
  description: boolean;
  price: boolean;
  tags: boolean;
}

const AddItem = () => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [isValid, setIsValid] = useState<IsValid>({
    name: false,
    description: false,
    price: false,
    tags: false,
  });
  const [inputValues, setInputValues] = useState<postProduct>({
    images: [],
    name: "",
    description: "",
    price: 0,
    tags: [],
  });

  const isValueCheck = (
    currentValue: string | string[],
    name: keyof IsValid
  ) => {
    if (currentValue.length > 0) {
      setIsValid((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });
      setInputValues((prev) => ({
        ...prev,
        [name]: currentValue,
      }));
    } else if (currentValue.length < 1) {
      setIsValid((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
      setInputValues((prev) => ({
        ...prev,
        [name]: currentValue,
      }));
    }
  };

  const imgFileUpload = async (imgFile: FormData) => {
    const result = await postUploadImage(imgFile);
    if (result) {
      setInputValues((prev) => ({
        ...prev,
        images: result.url,
      }));
    }
  };

  const uploadPostMutation = useMutation({
    mutationFn: (newPost: postProduct) => postAddItem(newPost),
    onSuccess: (data) => {
      const id = data.id;
      navigate(`/items/${id}`);
    },
  });

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newInputValues = {
      ...inputValues,
      price: Number(inputValues.price),
    };

    uploadPostMutation.mutate(newInputValues);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const allTrue = Object.values(isValid).every((value) => value === true);

    setDisabled(allTrue);
  }, [isValid]);

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
    >
      <div className="form-submit">
        <h2>상품 등록하기</h2>
        <button
          type="submit"
          disabled={uploadPostMutation.isPending || !disabled}
        >
          등록
        </button>
      </div>
      <ImageInput imgFileUpload={imgFileUpload} />
      <TitleInput isValueCheck={isValueCheck} />
      <DescriptionInput isValueCheck={isValueCheck} />
      <PriceInput isValueCheck={isValueCheck} />
      <TagInput isValueCheck={isValueCheck} />
    </form>
  );
};

export default AddItem;
