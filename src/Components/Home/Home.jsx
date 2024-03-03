import React from "react";
import "./home.scss";
import Header from "../Header/Header";
import Container from "../MainContainer/Container";

function Home() {
  return (
    <div className="bg-primaryBg-light dark:bg-primaryBg-dark w-full h-full">
      <Header />
      <Container />
    </div>
  );
}

export default Home;
