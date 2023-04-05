import React from "react";
import "../styles/pages/Novedades.css";
import novedades from "../images/novedades.png";
import NovedadesCard from "./NovedadesCard";

const Novedades = (props) => {
  return (
    <main className="news-main-container">
      <div className="home-img">
        <img className="dronebanner" src={novedades} alt="" />
      </div>
      <div className="novedades">
        <h2>Novedades</h2>
      </div>
      <div className="novedades-card">
        <NovedadesCard
          titulo="Novedad 1"
          subtitulo="Subtitulo 2"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          mollitia rerum illo neque sed! Quibusdam perspiciatis expedita aut
          magnam impedit deserunt. Vitae maiores molestias unde rerum sint
          provident maxime ad!"
        />
      </div>
      <hr />
      <div className="novedades-card">
        <NovedadesCard
          titulo="Novedad 1"
          subtitulo="Subtitulo 2"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          mollitia rerum illo neque sed! Quibusdam perspiciatis expedita aut
          magnam impedit deserunt. Vitae maiores molestias unde rerum sint
          provident maxime ad!"
        />
      </div>
      <hr />
      <div className="novedades-card">
        <NovedadesCard
          titulo="Novedad 1"
          subtitulo="Subtitulo 2"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          mollitia rerum illo neque sed! Quibusdam perspiciatis expedita aut
          magnam impedit deserunt. Vitae maiores molestias unde rerum sint
          provident maxime ad!"
        />
      </div>
      <hr />
    </main>
  );
};

export default Novedades;
