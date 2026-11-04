import React, { useState } from 'react';
import Header from './componentes/Header';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const [seccion, setSeccion] = useState('inicio');

  return (
    <div className="app-hotel">
      <Header seccion={seccion} setSeccion={setSeccion} />
      <main>
        {seccion === 'about' && <About />}
        {seccion === 'habitaciones' && <Footer setSeccion={setSeccion} soloHabitaciones={true} />}
        {seccion === 'contacto' && <Contact />}
      </main>
      {seccion !== 'habitaciones' && (
        <Footer setSeccion={setSeccion} soloHabitaciones={false} />
      )}
    </div>
  );
}

export default App;
