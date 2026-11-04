import React from 'react';

export function Header({ seccion, setSeccion }) {
  return (
    <header className="hotel-header">
      <nav className="navbar">
        <div className="logo" onClick={() => setSeccion('inicio')} style={{ cursor: 'pointer' }}>
          <span className="hotel-icon"></span>
          <h2>Hotel ucasal</h2>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={`nav-btn ${seccion === 'inicio' ? 'active' : ''}`}
              onClick={() => setSeccion('inicio')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${seccion === 'about' ? 'active' : ''}`}
              onClick={() => setSeccion('about')}
            >
              Sobre el Hotel
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${seccion === 'habitaciones' ? 'active' : ''}`}
              onClick={() => setSeccion('habitaciones')}
            >
              Habitaciones
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${seccion === 'contacto' ? 'active' : ''}`}
              onClick={() => setSeccion('contacto')}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>

      {seccion === 'inicio' && (
        <div id="inicio" className="hero-banner">
          <div className="hero-content">
            <h1>Bienvenidos a Hotel ucasal</h1>
            <p>Tu refugio de confort, elegancia y tranquilidad frente al mar</p>
            <button onClick={() => setSeccion('habitaciones')} className="btn-reservar">
              Ver Habitaciones
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
