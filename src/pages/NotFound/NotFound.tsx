import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound-container">
      <div>페이지를 찾을 수 없습니다.</div>
      <Link to="/">
        <button type="button">홈으로 이동</button>
      </Link>
    </div>
  );
};

export default NotFound;
