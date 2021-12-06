import React from 'react'

function Spinner() {
  return (
    <div className="mt-2 d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div> 
  )
}

export default Spinner
