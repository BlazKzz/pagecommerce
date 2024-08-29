import React from "react"
import './footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Columna 1*/}
                <div className="col">
                    <h4>Acerca de</h4>
                    <ul className="listado">
                        <li>Ropa Zone</li>
                        <li>Responsabilidad social</li>
                        <li>Preguntas frecuentes</li>
                    </ul>
                </div>
                {/* Columna 2*/}
                <div className="col">
                    <h4>Ayuda</h4>
                    <ul className="listado">
                        <li>Comprar</li>
                        <li>Resolución de problemas</li>
                        <li>Centro de seguridad</li>
                    </ul>
                </div>
                {/* Columna 3*/}
                <div className="col">
                    <h4>Redes sociales</h4>
                    <ul className="listado">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                {/* Columna 4*/}
                <div className="col">
                    <h4>Servicio al cliente</h4>
                    <ul className="listado">
                        <li>Contáctenos</li>
                        <li>Forma De Pago</li>
                        <li>Número de teléfono</li>
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
    )
}

export default Footer;