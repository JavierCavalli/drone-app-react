import React from "react";
import "../styles/pages/Servicios.css";
import banner3 from "../images/banner3.png";

const Servicios = () => {
  return (
    <main className="services-container-main">
      <div className="home-img">
        <img className="dronebanner" src={banner3} alt="" />
      </div>
      <div className="productos">
        <div className="productos-p">
          <h2>Conocenos</h2>
          <p>
            Orion es un emprendimiento hecho por varios apasionados del mundo de
            la tecnologia piloteada / radio control
          </p>
        </div>
        <div className="nosotros-card-container">
          <div className="nosotros-card">
            <i className="nosotros-card-icon fa-solid fa-handshake fa-xl"></i>
            <p className="nosotros-p-titulo">Asesoramiento Personalizado</p>
            <p className="nosotros-p-texto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              sit quaerat delectus earum ratione vel ab inventore fugiat
              recusandae, deserunt ipsum mollitia. Itaque officia, aspernatur id
              debitis quia repellat neque.
            </p>
          </div>

          <div className="nosotros-card-container">
            <div className="nosotros-card">
              <i className="nosotros-card-icon fa-solid fa-handshake fa-xl"></i>
              <p className="nosotros-p-titulo">Asesoramiento Personalizado</p>
              <p className="nosotros-p-texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                sit quaerat delectus earum ratione vel ab inventore fugiat
                recusandae, deserunt ipsum mollitia. Itaque officia, aspernatur
                id debitis quia repellat neque.
              </p>
            </div>
          </div>
          <div className="nosotros-card-container">
            <div className="nosotros-card">
              <i className="nosotros-card-icon fa-solid fa-handshake fa-xl"></i>
              <p className="nosotros-p-titulo">Asesoramiento Personalizado</p>
              <p className="nosotros-p-texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                sit quaerat delectus earum ratione vel ab inventore fugiat
                recusandae, deserunt ipsum mollitia. Itaque officia, aspernatur
                id debitis quia repellat neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Servicios;
