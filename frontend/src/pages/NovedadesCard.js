import React from "react";

const NovedadesCard = (props) => {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <h4>{props.subtitulo}</h4>
      <p>{props.texto}</p>
    </div>
  );
};

export default NovedadesCard;
