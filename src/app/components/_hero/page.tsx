import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1591049433264-618fa2f4558f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl mt-20 bg-white text-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          <h1 className="mb-14 text-4xl sm:text-5xl font-extrabold">Transforma tu presencia en línea con BentoSites</h1>
          <p className="mb-14 text-lg sm:text-xl font-semibold text-white">
            Diseño web personalizado y eficiente para tu negocio. Nuestro enfoque garantiza que cada sitio web que desarrollamos sea una poderosa herramienta para impulsar tu negocio en línea.
          </p>
          <button className="btn btn-primary mt-4">Consulta nuestros servicios</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
