import React from 'react'
import FormAddProduct from '../Components/FormAddProduct/FormaddProduct'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'


function AddProductsPage() {
  const token = JSON.parse(localStorage.getItem('token'))

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <FormAddProduct token={token} />
        </div>
      </div>
    </div>
  )
}

export default AddProductsPage
