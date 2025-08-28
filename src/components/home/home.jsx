import React from "react";
import Header from "../common-blocks/header/header.jsx";
import Footer from "../common-blocks/footer/footer.jsx";
import Main from "./main/main.jsx";
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
