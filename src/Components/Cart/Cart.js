import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

function Cart() {
  const [carrito, setCarrito] = useState([]);
  const [change, setChange] = useState(false);

  const getProductcard = () =>{  
    const cartforuse = localStorage.getItem('cart');  
    setCarrito(JSON.parse(cartforuse));
  }
  const modifyQuantity = (id,sign) =>{
    let auxcarrito = carrito;
    auxcarrito.forEach((item) => {
      if (item._id === id) {
        if (sign === "+") {
          if (item.stock === 1) swal({icon: 'error', title: 'Stock insuficiente', text: `De momento no contamos con esa cantidad!`})
          else {
            item.quantity = item.quantity+1;
            item.stock= item.stock-1;
          }
            
        } else {
          if (item.quantity === 1) swal({icon: 'error',title: 'Opps...', text: `No puede llevar menos de un articulo`})
           else {
            item.quantity = item.quantity-1;
            item.stock= item.stock+1;
          }
        }
      }
    })
    localStorage.setItem('cart',JSON.stringify(auxcarrito));
    setCarrito(auxcarrito);
    setChange(!change);
  }

  const deleteItem = (id) =>{
    let auxcarritos = carrito;
    for (let i = 0; i < auxcarritos.length; i++) {
      const item = auxcarritos[i];

      if (item._id === id) {
        auxcarritos.splice(i,1)
        localStorage.setItem('cart',JSON.stringify(auxcarritos));
        setCarrito(auxcarritos);
        setChange(!change);
      }
              
    }}

        
  useEffect(() => {
    getProductcard()
  }, [change])

  
  return (
    <div className="mt-2 col-md-9 me-sm-auto col-lg-10 px-md-4">
      {
        carrito?.length > 0 ? 
        carrito.map(product =>
        (<div className="d-flex flex-column alignt-items-center">
          <div className='row align-items-center pt-2 mt-2'>
            <img src={product.imgURL} alt={product.name} height='146' className="col-2"/>
            <div className='col-4 d-flex'>
              <div>
                <h4 className='ms-2 text-truncate' title={product.name}>{product.name}</h4>
                <h6 className='ms-2 '>Stock: {product.stock - 1 }</h6>
              </div>
            </div>
            <div className='col-3 d-flex align-items-center justify-content-evenly mx-0'>
              <div className='col-3 px-0 border d-flex justify-content-center' id='quantityNumber'><h4>{product.quantity}</h4></div>
              <div>
                <button className='btn btn-danger' onClick={()=>{modifyQuantity(product._id, "-")}}>-</button>
                <button className='btn btn-success' onClick={()=>{modifyQuantity(product._id, "+")}}>+</button>
              </div>
            </div>
            <div className='col-3  d-flex flex-column align-items-end justify-content-end px-0'>
              <h2>$ {product.price*product.quantity}</h2>
              <button className='btn btn-danger' onClick={()=>{deleteItem(product._id)}} title="eliminar">Eliminar</button>
            </div>
          </div>
          <hr></hr>
        </div> )
        ):
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
          <h1 className='mb-4'>Tu carrito está vacío</h1>
          <h4>¿No sabes qué comprar? </h4>
          <h4>¡Cientos de productos te esperan!</h4>
          <Link exact to="/home" className='mt-3 btn btn-outline-dark-blue'>Ir a inicio</Link>
        </div>
      }
      {carrito?.length > 0?
      <div className='d-flex justify-content-center mt-5'>
        <Link exact to='/home' className='align-self-center btn btn-secondary mx-1' id='continuebutton'>Continuar comprando</Link>
        <Link exact to='/cart/purchase' className='align-self-center btn btn-success mx-1' id='continuebutton'>Pagar</Link>

      </div>
      : null
      }
    </div>
  )
}

export default Cart