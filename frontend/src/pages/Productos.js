import React from "react";
import "../styles/pages/Productos.css";
import dronecontrol from "../images/drone-control.jpg";
import drone1 from "../images/drone1.jpg";
import drone2 from "../images/drone2.png";
import drone3 from "../images/drone3.jpg";
import drone4 from "../images/drone4.png";

const Productos = () => {
  return (
    <main className="prdouct-main-container">
      <div className="home-img">
        <img className="dronebanner" src={dronecontrol} alt="" />
      </div>
      <div className="productos">
        <div className="productos-p">
          <h2>Productos</h2>
          <p>Estos son algunos de los productos que importamos:</p>
        </div>
        <div className="drone-card-container">
          <div className="drone">
            <img src={drone1} alt="" class="drone-1" />
            <p className="drone-p">DJI Matrice 300 RTK</p>
            <div className="button-container-product">
              <button className="drone-button">Especificaciones</button>
            </div>
          </div>
          <div className="drone">
            <img src={drone2} alt="" class="drone-1" />
            <p className="drone-p">Flyability Elios 2</p>
            <div className="button-container-product">
              <button className="drone-button">Especificaciones</button>
            </div>
          </div>
          <div className="drone">
            <img src={drone3} alt="" class="drone-1" />
            <p className="drone-p">Parrot ANAFI USA</p>
            <div className="button-container-product">
              <button className="drone-button">Especificaciones</button>
            </div>
          </div>
          <div className="drone">
            <img src={drone4} alt="" class="drone-1" />
            <p className="drone-p">WingtraOne Gen II</p>
            <div className="button-container-product">
              <button className="drone-button">Especificaciones</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productos;
