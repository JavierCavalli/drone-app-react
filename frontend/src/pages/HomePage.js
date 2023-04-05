import React from "react";
import "../styles/pages/HomePage.css";
import dronebanner from "../images/dronebanner.jpg";

const HomePage = () => {
  return (
    <main className="homepage-main-container">
      <div className="home-img">
        <img className="dronebanner" src={dronebanner} alt="" />
      </div>
      <div className="columns">
        <div className="intro">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod omnis
            enim fugiat ab, non quis facilis aspernatur atque, repellendus nihil
            doloribus id? Quisquam magni fuga odit cumque similique animi
            voluptate?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptatum numquam, ratione vel labore perspiciatis
            accusantium doloremque autem qui a doloribus impedit! Culpa, commodi
            necessitatibus eveniet magnam error dolores doloremque.
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <span className="cita">Productos</span>
          <span className="autor">
            Todos nuestros productos son importados con garantia por 2 años
          </span>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
