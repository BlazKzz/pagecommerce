import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return(
    <header className="header">
        <a href="/" className="logo">Logo</a>
      {/* Barra de busqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Busca tu ropa" />
      </div>
      {/* Fin barra de busqueda*/}
        <nav className="navbar">
            <a href="/">Inicio</a>
            <a href="/">Acerca de</a>
            <a href="/">Descubre</a>
            <a href="/">Servicios</a>
            <a href="/">Contacto</a>
            <button className="navbar-btn"><FontAwesomeIcon icon={faUser} /></button>
            <button className="navbar-btn"><FontAwesomeIcon icon={faShoppingCart} /></button>
        </nav>
    </header>
  )
}

export default Navbar