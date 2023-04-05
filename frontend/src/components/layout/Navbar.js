import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-main-container">
        <ul className="nav-ul">
          <li>
            <Link className="nav-li" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="nav-li" to="/productos">
              Productos
            </Link>
          </li>
          <li>
            <Link className="nav-li" to="/servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="nav-li" to="/galeria">
              Galeria
            </Link>
          </li>
          <li>
            <Link className="nav-li" to="/novedades">
              Novedades
            </Link>
          </li>
          <li>
            <Link className="nav-li" to="contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
