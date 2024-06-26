import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar flex pl-5 pr-5 bg-primary text-base-100 fixed top-0 left-0 right-0 z-50 border-b-2 border-black">
      <div className="navbar-start">
        {/* Logo con enlace */}
        <a href="/" className="flex items-center">
          <Image src="/logo.svg" alt="BentoSites Logo" width={150} height={50} className='xl:w-[200px] ml-10 mt-3 mb-3' />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-bold">
          <li><a href="#portfolio">Portafolio</a></li>
          <li>
            <details>
              <summary>Servicios</summary>
              <ul className="p-2">
                <li><a href="#services-web">Página Web Presentacional</a></li>
                <li><a href="#services-ecommerce">Tienda Virtual</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact" className="btn text-xl text-info">Contáctanos</a>
      </div>
    </div>
  );
};

export default Navbar;
