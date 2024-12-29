import Image from "next/image";
import React from "react";
import Navbar from "./components/NavBar";
import Group from "./components/Group1";
import ProductSection from "./components/ProductSection";
import Inspiration from "./components/Inspiration";
import FuniroFurniture from "./components/Furniture";
import Footer from "./components/Footer";



const FurniroLogo = () => {
  return (
    <div className="furniro-container">
      {/* Navbar Section */}
      <div className="header">
        <div className="furniro-logo">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Furniro Logo"
            width={50}
            height={32}
            className="furniro-logo-img"
          />
          <h1 className="furniro-heading">Furniro</h1>
          <Navbar/>
        </div>
        
      </div>

      {/* Main Section */}
      <div className="main-content">
        <div className="image-container">
          <Image
            src="/Mask.png"
            alt="Main Banner"
            width={1440}
            height={716.83}
            style={{ display: "block", width: "100%", height: "auto" }}/>
          <div >
            
          </div>
      <div>
        <Group/>
        </div>
        <br /><br />
        <div>
          <ProductSection/>

        </div>
        <br /><br />
        <div>
        <Inspiration/>
        </div>
        <br /><br />
      <div>
        <FuniroFurniture/>
        </div>
        <br /><br />
        <div>
          <Footer/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FurniroLogo;