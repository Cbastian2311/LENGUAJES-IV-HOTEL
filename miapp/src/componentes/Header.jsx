import React from 'react';

export function Header() {
  return (
    <header className="hotel-header">
      <nav className="navbar">
        <div className="logo">
          <span className="hotel-icon"></span>
          <h2>Hotel ucasal</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#about">Sobre el Hotel</a></li>
          <li><a href="#habitaciones">Habitaciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <div id="inicio" className="hero-banner">
        <div className="hero-content">
          <h1>Bienvenidos a Hotel ucasal</h1>
          <p>Tu refugio de confort, elegancia y tranquilidad frente al mar</p>
          <a href="#habitaciones" className="btn-reservar">Ver Habitaciones</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
