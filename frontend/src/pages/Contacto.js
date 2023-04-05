import React from "react";
import "../styles/pages/Contacto.css";
import contacto from "../images/contacto.png";

const Contacto = () => {
  return (
    <main class="contact-container-main">
      <div class="home-img">
        <img class="dronebanner" src={contacto} alt="" />
      </div>
      <div class="contacto-container">
        <div>
          <h2>Contacto</h2>
          <form action="" method="" class="formulario">
            <p>
              <label for="nombre">Nombre</label>
              <input type="text" name="" />
            </p>
            <p>
              <label for="email">Email</label>
              <input type="text" name="" />
            </p>
            <p>
              <label for="Mensaje">Mensaje</label>
              <textarea type="text" name=""></textarea>
            </p>
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
        <div class="datos">
          <h2>Otras vias de comunicación</h2>
          <p>Tambien nos pueden contactar usando los siguientes medios</p>
          <ul>
            <li>Telefono: 15-0000-0000</li>
            <li>Email: contacto@contacto.com</li>
            <li>Instagram:</li>
            <li>Facebook:</li>
            <li>Whatsapp:</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
