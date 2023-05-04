import React, { useState } from "react";
import "../styles/pages/Contacto.css";
import contacto from "../images/contacto.png";
import axios from "axios";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="contact-container-main">
      <div className="home-img">
        <img className="dronebanner" src={contacto} alt="" />
      </div>
      <div className="contacto-container">
        <div>
          <h2>Contacto</h2>
          <form className="formulario" onSubmit={handleSubmit}>
            <p>
              <label for="nombre">Nombre</label>
              <input
                type="text"
                name=""
                value={formData.nombre}
                onChange={handleChange}
              />
            </p>
            <p>
              <label for="email">Email</label>
              <input
                type="text"
                name=""
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <p>
              <label for="email">Telefono</label>
              <input
                type="text"
                name=""
                value={formData.telefono}
                onChange={handleChange}
              />
            </p>
            <p>
              <label for="Mensaje">Mensaje</label>
              <textarea
                type="text"
                name=""
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </p>
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </div>
        <div className="datos">
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
