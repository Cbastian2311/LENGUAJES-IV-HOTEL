import React from 'react';

export function Footer() {
  const habitaciones = [
    {
      id: 1,
      nombre: 'Habitación Individual Estándar',
      capacidad: '1 Huésped',
      cama: '1 Cama Individual',
      precio: '$45 / noche',
      imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
      servicios: ['Wi-Fi Gratis', 'TV Smart 43"', 'Baño Privado', 'Aire Acondicionado']
    },
    {
      id: 2,
      nombre: 'Habitación Doble Superior',
      capacidad: '2 Huéspedes',
      cama: '1 Cama King Size o 2 Twin',
      precio: '$75 / noche',
      imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
      servicios: ['Balcón Privado', 'Desayuno Buffet', 'Minibar', 'Wi-Fi Alta Velocidad']
    },
    {
      id: 3,
      nombre: 'Suite Matrimonial Deluxe',
      capacidad: '2 Huéspedes',
      cama: '1 Cama King Size Premium',
      precio: '$120 / noche',
      imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      servicios: ['Jacuzzi Hidromasaje', 'Vista al Mar', 'Room Service 24h', 'Cava de Vinos']
    },
    {
      id: 4,
      nombre: 'Suite Familiar Presidencial',
      capacidad: '4 Huéspedes',
      cama: '2 Camas Dobles + Sala de Estar',
      precio: '$160 / noche',
      imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80',
      servicios: ['2 Ambientes Separados', 'Cocina Kitchenette', 'Terraza Panorámica', 'Caja Fuerte']
    }
  ];

  return (
    <footer id="habitaciones" className="hotel-footer">
      {/* Sección de las 4 Habitaciones */}
      <div className="container rooms-section">
        <div className="footer-rooms-header">
          <span className="badge">Nuestras Opciones de Alojamiento</span>
          <h2>Nuestras 4 Habitaciones</h2>
          <p className="subtitle">Espacios diseñados para tu máximo confort y descanso garantizado</p>
        </div>

        <div className="rooms-grid">
          {habitaciones.map((hab) => (
            <div key={hab.id} className="room-card">
              <div className="room-image-wrap">
                <img src={hab.imagen} alt={hab.nombre} className="room-img" />
                <span className="room-price">{hab.precio}</span>
              </div>
              <div className="room-details">
                <h3>{hab.nombre}</h3>
                <p className="room-meta">👥 {hab.capacidad} &nbsp;|&nbsp; 🛏️ {hab.cama}</p>
                <ul className="room-features">
                  {hab.servicios.map((srv, i) => (
                    <li key={i}>✓ {srv}</li>
                  ))}
                </ul>
                <a href="#contacto" className="btn-room-book">Reservar Esta Habitación</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de página con información general y derechos */}
      <div className="footer-bottom">
        <div className="container footer-content">
          <div className="footer-col">
            <h3> Hotel ucasal</h3>
            <p>La combinación perfecta entre relajación, naturaleza y hospitalidad de primera clase.</p>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#about">Sobre el Hotel</a></li>
              <li><a href="#habitaciones">Nuestras 4 Habitaciones</a></li>
              <li><a href="#contacto">Contacto y Reservas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Atención al Cliente</h4>
            <p>Lunes a Domingo: 24 horas</p>
            <p>Email: reservas@granhotelucasal.com</p>
            <p>Tel: +54 9 11 4567-8900</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Hotel ucasal - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
