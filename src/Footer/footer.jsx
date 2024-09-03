import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Columna 1*/}
                <div className="col">
                    <h4>Acerca de</h4>
                    <ul className="listado">
                        <li><a href="#" className="footer-link">Ropa Zone</a></li>
                        <li><a href="#" className="footer-link">Responsabilidad social</a></li>
                        <li><a href="#" className="footer-link">Preguntas frecuentes</a></li>
                    </ul>
                </div>
                {/* Columna 2*/}
                <div className="col">
                    <h4>Ayuda</h4>
                    <ul className="listado">
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Resolución de problemas</a></li>
                        <li><a href="#">Centro de seguridad</a></li>
                    </ul>
                </div>
                {/* Columna 3*/}
                <div className="col">
                    <h4>Redes sociales</h4>
                    <ul className="listado">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                {/* Columna 4*/}
                <div className="col">
                    <h4>Servicio al cliente</h4>
                    <ul className="listado">
                        <li><a href="#">Contáctenos</a></li>
                        <li><a href="#">Forma De Pago</a></li>
                        <li><a href="#">Número de teléfono</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} RopaZone  | Todos los derechos reservados  | Chonchi, Chiloé, Los lagos
                </p>
            </div>
        </div>
    </div>
  );
};

export default Footer;