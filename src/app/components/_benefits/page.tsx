import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { BarChart, BusinessService, Escalator, Globe } from 'grommet-icons';
import React from 'react';

// Define the type for CustomIcon props
interface CustomIconProps {
  src: string;
  alt: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="inline w-6 h-6 mr-3" />
);

const Benefits: React.FC = () => {
  return (
    <div className="mockup-window border bg-base-300 m-10">
      <div className="flex justify-center bg-base-200">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 mt-8">Por qué elegirnos</h2>
          <div className="flex flex-wrap justify-center items-start">
            {/* Primera columna con fondo primary */}
            <div className="bg-primary text-base-100 font-semibold p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-5 md:mb-0">
              <ul className="text-lg text-left space-y-14 p-6 pb-0">
                <li><BarChart size='medium' color='#333333' className='mr-3'/>Integración estratégica de negocios y tecnología web.</li>
                <li><Escalator size='medium' color='#333333' className='mr-3'/>Optimización de procesos y KPIs para mejorar rendimiento</li>
                <li><Globe size='medium' color='#333333' className='mr-3'/>Experiencia en mercados de México y Sudamérica</li>
                <li><BusinessService size='medium' color='#333333' className='mr-3'/>Enfoque en la personalización y adaptabilidad de soluciones</li>
              </ul>
            </div>
            {/* Segunda columna con imagen y fondo accent */}
            <div className="md:w-1/2">
              <figure className="pl-6">
                <img
                  src="https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?q=80&w=1000&auto=format&fit=crop"
                  alt="Shoes"
                  className="rounded-xl w-[400px] h-auto"
                />
              </figure>
              <div className="p-6">
                <ul className="bg-accent rounded-lg shadow-lg w-full text-base-100 font-semibold text-lg space-y-2 p-6 h-50">
                  <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faJs} className='w-6 h-6 mr-3'/>
                    <FontAwesomeIcon icon={faReact} className='w-6 h-6 mr-3'/>
                    <FontAwesomeIcon icon={faNodeJs} className='w-6 h-6 mr-3'/>
                    <CustomIcon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                    <CustomIcon src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" />
                    <CustomIcon src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
                  </div>
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
