import React from "react";
import Header from "../common-blocks/header/header";
import Footer from "./../common-blocks/footer/footer";
import Main from "./main/main";
import "./home.css";

const Home = () => {
   
    return (
      <div className="home-page">
          <Header />  
          <Main />
          <Footer />
      </div>
    );
  }

export default Home;
