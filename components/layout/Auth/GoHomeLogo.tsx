import React from "react";
import logoImg from "../../../assets/images/icons/panda-market-logo.svg";
import { Link } from "react-router-dom";

function GoHomeLogo() {
  return (
    <section className="go-home-logo">
      <Link to="/">
        <img src={logoImg} alt="판다 마켓 홈" width="396" />
      </Link>
    </section>
  );
}

export default GoHomeLogo;
