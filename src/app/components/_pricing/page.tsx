import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faShoppingCart, faBlog, faSearch, faChartLine, faDatabase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Pricing = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-base-100">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-sky-600">Nuestros Paquetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Paquete Básico */}
          <div className="bg-accent p-8 rounded-xl shadow-lg text-center overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <img src="/pricing1.jpg" alt="Paquete Básico" className="rounded-full mx-auto mb-4" />
            <div className="group-hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Basico</h3>
              <p className="text-gray-700 mb-6">Para una presencia básica en línea.</p>
              <ul className="text-left mb-6 space-y-4">
                <li className="flex items-center"><FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2 text-primary" />Diseño y desarrollo de una página web básica</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faMobileAlt} className="w-5 h-5 mr-2 text-primary" />Responsive design</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2 text-primary" />Integración de redes sociales</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-2 text-primary" />Formulario de contacto básico</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-2 text-primary" />Optimización SEO básica</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-2 text-primary" />Soporte técnico: 1 mes</li>
              </ul>
            </div>
            <div className="group-hover:translate-y-1">
              <div className="text-3xl font-bold mb-4 text-gray-800 mt-16">$990 USD</div>
              <button className="btn btn-primary hover:bg-primary-dark font-semibold px-6 py-3 rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105">Contratar</button>
            </div>
          </div>
          {/* Paquete Intermedio */}
          <div className="bg-info p-8 rounded-xl shadow-lg text-center overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <img src="/pricing2.jpg" alt="Paquete Intermedio" className="rounded-full mx-auto mb-4" />
            <div className="group-hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-4">Prime</h3>
              <p className="text-gray-700 mb-6">Para negocios en crecimiento.</p>
              <ul className="text-left mb-6 space-y-4">
                <li className="flex items-center"><FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2" />Diseño y desarrollo de sitio web completo</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2" />E-commerce básico</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faBlog} className="w-5 h-5 mr-2" />Blog</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-2" />Optimización SEO avanzada</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-2" />Integración de herramientas analíticas</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-2" />Optimización de velocidad</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faDatabase} className="w-5 h-5 mr-2" />Soporte técnico: 3 meses</li>
              </ul>
            </div>
            <div className="group-hover:translate-y-1">
              <div className="text-3xl font-bold mb-4">$2,999 USD</div>
              <button className="btn btn-primary hover:bg-primary-dark font-semibold px-6 py-3 rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105">Contratar</button>
            </div>
          </div>
          {/* Paquete Avanzado */}
          <div className="bg-accent p-8 rounded-xl shadow-lg text-center overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <img src="/pricing3.jpg" alt="Paquete Avanzado" className="rounded-full mx-auto mb-4" />
            <div className="group-hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Pro</h3>
              <p className="text-gray-700 mb-6">Para soluciones avanzadas y personalizadas.</p>
              <ul className="text-left mb-6 space-y-4">
                <li className="flex items-center"><FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2 text-primary" />Diseño y desarrollo de sitio web personalizado</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2 text-primary" />E-commerce avanzado</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2 text-primary" />Desarrollo de aplicaciones web</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-2 text-primary" />Integración con CRM y herramientas de marketing</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-2 text-primary" />SEO profesional</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faDatabase} className="w-5 h-5 mr-2 text-primary" />Contenido dinámico</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-2 text-primary" />Soporte técnico: 6 meses - 1 año</li>
              </ul>
            </div>
            <div className="group-hover:translate-y-1">
              <div className="text-3xl font-bold mb-4 text-gray-800">$9,900 USD</div>
              <button className="btn btn-primary hover:bg-primary-dark font-semibold px-6 py-3 rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105">Contratar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
