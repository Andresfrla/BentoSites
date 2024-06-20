import React from 'react';

const Benefits = () => {
  return (
    <div className="mockup-window border bg-base-300 m-10">
      <div className="flex justify-center bg-base-200">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 mt-8">Por qué elegirnos</h2>
          <div className="flex flex-wrap justify-center items-start">
            {/* Primera columna con fondo primary */}
            <div className="bg-primary text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-4 md:mb-0">
              <ul className="text-lg text-left space-y-2 p-6">
                <li>Integración estratégica de negocios y tecnología web</li>
                <li>Optimización de procesos y KPIs para mejorar rendimiento</li>
                <li>Experiencia en mercados de México y Sudamérica</li>
                <li>Enfoque en la personalización y adaptabilidad de soluciones</li>
              </ul>
            </div>
            {/* Segunda columna con imagen y fondo accent */}
            <div className="md:w-1/2">
              <figure className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?q=80&w=1000&auto=format&fit=crop"
                  alt="Shoes"
                  className="rounded-xl w-[400px] h-auto"
                />
              </figure>
              <div className="p-6">
                <ul className="bg-accent rounded-lg shadow-lg w-full text-white text-lg space-y-2 p-6 h-50">
                  <li>Desarrollo completo en JavaScript, React, Node.js y MongoDB</li>
                  <li>Toma de decisiones basada en datos y análisis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
