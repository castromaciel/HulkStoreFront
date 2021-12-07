import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

function SideBar() {
  const user = JSON.parse(localStorage.getItem('user'))

  const closeAccount = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.replace('/')
  }

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
      <div className="position-sticky pt-3 d-flex flex-column text-white">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item my-1">
            <NavLink to='/home' className="nav-link text-white" aria-current="page">
              <i className="bi bi-house mx-2"></i>
              Inicio
            </NavLink>
          </li>
          {user.roles[1]?.name?
            <li className="nav-item my-1">
              <NavLink to="/inventory" className="nav-link text-white">
                <i className="bi bi-box mx-2"></i>
                Inventory
              </NavLink>
            </li>
            :
            null
          }
          {user.roles[1]?.name?
            <li className="nav-item my-1">
              <NavLink to="/addproduct" className="nav-link text-white">
              <i className="bi bi-plus-circle mx-2"></i>
                Agregar Producto
              </NavLink>
            </li>
            :
            null
          }
          <li className="nav-item my-1">
            <NavLink to="/cart" className="nav-link text-white">
              <i className="bi bi-cart4 mx-2"></i>
              Carrito
            </NavLink>
          </li>
        </ul>
        <hr className="mx-3"/>
        <div className="p-3 dropdown">
          <NavLink to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://www.vippng.com/png/detail/149-1499191_user-image-with-black-background-comments-human-icon.png" alt="profile" width="32" height="32" className="rounded-circle me-2"/>
            <strong>{user.username}</strong>
          </NavLink>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser">
            <li className="dropdown-item" onClick={closeAccount}>Cerrar Sesión</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
