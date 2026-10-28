import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 4000);
  };

  return (
    <section id="contacto" className="section-contact">
      <div className="container">
        <div className="contact-header">
          <span className="badge">Ponte en Contacto</span>
          <h2>Contacto y Reservas</h2>
          <p className="subtitle">¿Tienes alguna consulta o deseas reservar una habitación? Escríbenos.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>Estamos a tu entera disposición para resolver cualquier duda o solicitud especial.</p>
            
            <div className="info-list">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Dirección</strong>
                  <p>Av. Costanera del Sol 1420, Playa Dorada</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Teléfono / WhatsApp</strong>
                  <p>+54 9 11 4567-8900</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <strong>Correo Electrónico</strong>
                  <p>reservas@hotelucasal.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">⏰</span>
                <div>
                  <strong>Horarios</strong>
                  <p>Check-in: 14:00 hs | Check-out: 11:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {enviado && (
              <div className="alert-success">
                ✅ ¡Gracias por tu mensaje! Nos pondremos en contacto a la brevedad.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Tu nombre y apellido"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+54 9..."
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje o Consulta de Reserva</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  required
                  placeholder="Cuéntanos fechas, cantidad de personas o cualquier requerimiento..."
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
