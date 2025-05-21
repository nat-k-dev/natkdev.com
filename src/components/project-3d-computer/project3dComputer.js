import React from "react";
import "./project3dComputer.css";
import ComputersCanvas from "../canvas/Computer";
import { Link } from "react-router-dom";

const Project3dComputer = () => {

    
    return (
      <div className="relative z-0 bg-black ">
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-30 text-white hover:bg-pale-turquoise bg-soft-mint-blue rounded-xl px-4 py-3 cursor-pointer">
          <Link to="/">Go back</Link>
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <section className="relative w-screen h-screen mx-auto">
            <div className="h-[80%] w-[90%]">
              <ComputersCanvas />
            </div>
          </section>
        </div>


      </div>
    );
}

export default Project3dComputer;