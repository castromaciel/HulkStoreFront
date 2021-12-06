import React from 'react'
import Cart from '../Components/Cart/Cart'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'

function CartPage() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default CartPage
