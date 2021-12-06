import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import iconHulk from '../../Images/IconoHulk.png'

function Header() {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-1 shadow px-2">
      <NavLink to='/home' className="d-flex align-items-center nav-link p-0">
        <img src={iconHulk} alt="Icono de Hulk" width="32" height="32" />
        <p className="navbar-brand col-md-3 col-lg-2 mb-0 me-0 p-md-2">Hulk Store</p>
      </NavLink>
      <button className="navbar-toggler  d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
    </header>
  )
}

export default Header
