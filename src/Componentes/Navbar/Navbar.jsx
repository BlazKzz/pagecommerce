import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Controla cuál menú está activo

  // Función para manejar el click en el icono de usuario
  const toggleUserMenu = () => {
    setActiveMenu(activeMenu === 'user' ? null : 'user'); // Alterna el menú de usuario
  };

  // Función para manejar el click en el icono de carrito
  const toggleCartMenu = () => {
    setActiveMenu(activeMenu === 'cart' ? null : 'cart'); // Alterna el menú de carrito
  };

  return (
    <header className="header">
      <a href="/" className="logo">RopaZone</a>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Busca tu ropa" />
      </div>
      {/* Fin barra de búsqueda*/}

      <nav className="navbar">
        <a href="/">Inicio</a>
        <a href="/">Acerca de</a>
        <a href="/">Descubre</a>
        <a href="/">Servicios</a>
        <a href="/">Contacto</a>
        <button className="navbar-btn"><FontAwesomeIcon icon={faHeart} /></button>
        {/* Botón de Usuario */}
        <div className="user-menu">
          <button className="navbar-btn" onClick={toggleUserMenu}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          {/* Menú de Usuario */}
          {activeMenu === 'user' && (
            <div className="dropdown-menu">
              <a href="/perfil">Mi Perfil</a>
              <a href="/ordenes">Mis pedidos</a>
              <a href="/favoritos">Favoritos</a>
              <a href="/logout">Cerrar Sesión</a>
            </div>
          )}
        </div>

        {/* Botón del Carrito */}
        <div className="cart-menu">
          <button className="navbar-btn" onClick={toggleCartMenu}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          {/* Menú del Carrito */}
          {activeMenu === 'cart' && (
            <div className="dropdown-menu">
              <a href="/carrito">Ver Carrito</a>
              <a href="/comprar">Finalizar Compra</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;