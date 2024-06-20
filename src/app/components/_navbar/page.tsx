import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar flex p-5 bg-primary text-base-100">
    <div className="navbar-start">
        <a className="btn btn-ghost text-2xl">BentoSites</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-bold">
        <li><a>Portafolio</a></li>
        <li>
            <details>
            <summary>Servicios</summary>
            <ul className="p-2">
                <li><a>Pagina Web presentacional</a></li>
                <li><a>Tienda virtual</a></li>
            </ul>
            </details>
        </li>
        <li><a>Blog</a></li>
        <li><a>Sobre nosotros</a></li>
        </ul>
    </div>
    <div className="navbar-end">
        <a className="btn text-xl">Contactanos</a>
    </div>
    </div>
  )
}

export default Navbar