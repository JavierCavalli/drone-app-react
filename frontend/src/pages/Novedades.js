import React, { useState, useEffect } from "react";
import "../styles/pages/Novedades.css";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";

const Novedades = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <main className="news-main-container">
      <div className="home-img"></div>
      <div className="novedades">
        <h2>Novedades</h2>
      </div>
      {loading ? (
        <p>Cargando ...</p>
      ) : (
        novedades.map((item) => (
          <NovedadItem
            key={item.novedades.id}
            title={item.novedades.titulo}
            subtitle={item.novedades.subtitulo}
            imagen={item.imagen}
            body={item.novedades.cuerpo}
          />
        ))
      )}
    </main>
  );
};

export default Novedades;
