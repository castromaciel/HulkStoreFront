import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import Inventory from '../Components/Inventory/Inventory'
import Header from '../Components/Header/Header'

function InventoryPAge() {
  const token = JSON.parse(localStorage.getItem('token'))

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Inventory token={token}/>
        </div>
      </div>
    </div>
  )
}

export default InventoryPAge
