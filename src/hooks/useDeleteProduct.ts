import { useNavigate } from "react-router-dom";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { deleteProduct } from "@/lib/productApi";

interface UseDeleteProductOptions {
  onSuccessRedirectTo: string;
  productUrl: string;
}

const useDeleteProduct = ({
  onSuccessRedirectTo: onSuccessRedirectUrl,
  productUrl,
}: UseDeleteProductOptions) => {
  const navigate = useNavigate();

  const mutation: UseMutationResult<void, Error, number> = useMutation({
    mutationFn: (productId: number) =>
      deleteProduct({
        productUrl,
        productId,
      }),
    onSuccess: () => {
      alert("삭제되었습니다.");
      navigate(onSuccessRedirectUrl);
    },
    onError: (error) => {
      console.error("삭제 중 오류가 발생했습니다:", error);
    },
  });

  return mutation;
};

export default useDeleteProduct;
