import { useMutation } from "@tanstack/react-query";
import { ProductData } from "@/types/ProductTypes";
import { uploadImage } from "@/lib/api";
import { createProduct } from "@/lib/productApi";
import { useNavigate } from "react-router-dom";
import { ArticlePostData } from "@/types/ArticleTypes";

interface UseAddProductOptions {
  onSuccessRedirectUrl: string;
  productUrl: string;
}

function isProductData(
  data: ArticlePostData | ProductData
): data is ProductData {
  return (data as ProductData).images !== undefined;
}

function isArticlePostData(
  data: ArticlePostData | ProductData
): data is ArticlePostData {
  return (data as ArticlePostData).image !== undefined;
}

const useAddProduct = ({
  onSuccessRedirectUrl,
  productUrl,
}: UseAddProductOptions) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      productData,
      file,
    }: {
      productData: ProductData | ArticlePostData;
      file: File | null;
    }) => {
      if (file) {
        const imageUrl = await uploadImage(file);

        if (isProductData(productData)) {
          productData.images = [imageUrl];
        } else if (isArticlePostData(productData)) {
          productData.image = imageUrl;
        }
      }

      return createProduct({
        productData,
        productUrl,
      });
    },
    onSuccess: () => {
      navigate(onSuccessRedirectUrl);
      alert("항목이 성공적으로 등록되었습니다.");
    },
    onError: (error) => {
      console.error("항목 등록 중 오류 발생:", error);
      alert("항목 등록 중 오류가 발생했습니다.");
    },
  });
};

export default useAddProduct;
