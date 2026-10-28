import React from 'react';
import Header from './componentes/Header';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="app-hotel">
      <Header />
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
