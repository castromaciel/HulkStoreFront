import React from 'react'
import FormAddProduct from '../Components/FormAddProduct/FormaddProduct'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'


function AddProductsPage() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <FormAddProduct />
        </div>
      </div>
    </div>
  )
}

export default AddProductsPage
