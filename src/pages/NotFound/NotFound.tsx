import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound-container">
      <h2>404 ERROR</h2>
      <div>
        페이지를 찾을 수 없습니다.
        <br />
        존재하지 않는 주소를 입력하셨거나,
        <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </div>
      <Link to="/">
        <button type="button">홈으로 이동</button>
      </Link>
    </div>
  );
};

export default NotFound;
