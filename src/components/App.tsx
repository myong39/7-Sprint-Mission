import Header from "./Layout/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/reset.css";
import "../styles/common.css";
import "../styles/global.css";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
