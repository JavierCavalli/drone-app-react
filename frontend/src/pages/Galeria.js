import React from "react";
import "../styles/pages/Galeria.css";
import galeria from "../images/galeria.png";
import image1 from "../images/1.png";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.png";
import image6 from "../images/6.jpg";
import image7 from "../images/7.png";
import image8 from "../images/8.png";

const Galeria = () => {
  return (
    <main className="galeria-container-main">
      <div className="home-img">
        <img className="dronebanner" src={galeria} alt="" />
      </div>
      <div className="productos">
        <div className="productos-p">
          <h2>Galeria</h2>
          <p>Algunas fotos tomadas con nuestros drones:</p>
        </div>
        <div className="drone-galery-container">
          <img src={image1} alt="" class="galery-img" />
          <img src={image2} alt="" class="galery-img" />
          <img src={image3} alt="" class="galery-img" />
          <img src={image4} alt="" class="galery-img" />
          <img src={image5} alt="" class="galery-img" />
          <img src={image6} alt="" class="galery-img" />
          <img src={image7} alt="" class="galery-img" />
          <img src={image8} alt="" class="galery-img" />
        </div>
      </div>
    </main>
  );
};

export default Galeria;
