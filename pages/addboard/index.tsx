import RegisterForm from "@/components/layout/RegisterForm/RegisterForm";
import { fields } from "@/components/layout/RegisterForm/registerConfig";

export default function AddBoard() {
  const formFields = fields;

  return (
    <div>
      <RegisterForm fields={formFields} titleText={"게시글 쓰기"} />
    </div>
  );
}
