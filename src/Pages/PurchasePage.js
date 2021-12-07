import React from 'react'
import Header from '../Components/Header/Header'
import ResumeCart from '../Components/ResumeCart/ResumeCart'
import SideBar from '../Components/SideBar/SideBar'

function PurchasePage() {
  const token = JSON.parse(localStorage.getItem('token'))

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <ResumeCart token={token}/>
        </div>
      </div>
    </div>
  )
}

export default PurchasePage
