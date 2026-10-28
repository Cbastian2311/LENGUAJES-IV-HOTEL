import React from 'react';

export function About() {
  const servicios = [
    {   titulo: 'Piscina & Spa', desc: 'Piscina climatizada y zona de masajes relajantes.' },
    {   titulo: 'Restaurante Gourmet', desc: 'Cocina internacional y platos típicos de autor.' },
    {   titulo: 'Wi-Fi de Alta Velocidad', desc: 'Conexión gratuita en todas las habitaciones y áreas.' },
    {  titulo: 'Estacionamiento Gratis', desc: 'Seguridad las 24 horas para su vehículo.' },
  ];

  return (
    <section id="about" className="section-about">
      <div className="container">
        <div className="about-header">
          <span className="badge">Conócenos</span>
          <h2>Sobre Nuestro Hotel</h2>
          <p className="subtitle">Más de 25 años brindando experiencias inolvidables a nuestros huéspedes</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Una experiencia de lujo y calidez familiar</h3>
            <p>
              Ubicado en un entorno privilegiado, <strong>Hotel ucasal</strong> combina la 
              arquitectura moderna con un servicio personalizado de primer nivel. Nos esforzamos 
              por hacer que cada estancia sea única, ya sea por negocios o vacaciones familiares.
            </p>
            <p>
              Disfruta de nuestros amplios jardines, exquisita gastronomía y el descanso reparador 
              que solo nuestras exclusivas suites pueden ofrecerte.
            </p>
            <div className="hotel-stats">
              <div className="stat-item">
                <span className="stat-number">+15.000</span>
                <span className="stat-label">Huéspedes felices</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9 ★</span>
                <span className="stat-label">Calificación promedio</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Atención personalizada</span>
              </div>
            </div>
          </div>

          <div className="about-image-card">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
              alt="Instalaciones del Hotel"
              className="about-img"
            />
          </div>
        </div>

        <div className="services-grid">
          {servicios.map((item, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{item.icon}</span>
              <h4>{item.titulo}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
