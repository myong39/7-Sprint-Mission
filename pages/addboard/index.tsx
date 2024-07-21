import RegisterAuthForm from "@/components/layout/RegisterForm/RegisterForm";
import { fields } from "@/components/layout/RegisterForm/registerConfig";

export default function AddBoard() {
  const formFields = fields;

  return (
    <div>
      <RegisterAuthForm
        fields={formFields}
        titleText={"게시글 쓰기"}
        buttonText={"등록"}
      />
    </div>
  );
}
