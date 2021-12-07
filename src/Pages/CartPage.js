import React from 'react'
import MainCart from '../Components/Cart/MainCart'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'

function CartPage() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <MainCart />
        </div>
      </div>
    </div>
  )
}

export default CartPage
