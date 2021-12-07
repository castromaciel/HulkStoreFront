import React from 'react'
import Header from '../Components/Header/Header'
import Products from '../Components/Products/Products'
import SideBar from '../Components/SideBar/SideBar'

function HomePage() {
  const token = JSON.parse(localStorage.getItem('token'))

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Products token={token}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
