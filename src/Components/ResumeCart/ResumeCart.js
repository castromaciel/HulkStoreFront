import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { buyCart } from '../../Services/Cart/buyCart';

function ResumeCart({token}) {

  const cartforuse = localStorage.getItem('cart');
  const [carrito, setCarrito] = useState([]);
  const [suma, setSuma] = useState(0)
  const getProductcard = () => setCarrito(JSON.parse(cartforuse));

  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    const purchase = {items: JSON.parse(cartforuse), token}

    const status = await buyCart(purchase).then(res => res)
    console.log(status)
    if(status === 204) {
      swal({ icon: 'success', title: '¡Compra exitosa!', text: 'Se descontará de tu saldo' })
      .then((confirm) => {
        if (confirm) {
          localStorage.setItem('cart', JSON.stringify([]))
          window.location.replace('/home')
        }
      })
    }
  }
  
  const salesTotal = ()=> {
    const cartforuse = JSON.parse(localStorage.getItem('cart'));
    let sumador = 0
    for (let i = 0; i < cartforuse.length; i++) {
      const element = cartforuse[i];
      const quantity = element.quantity
      const price = element.price
      const mult = quantity*price
      sumador+=mult
      setSuma(sumador)
    }
  }
  
  useEffect(() => {
      getProductcard()
      salesTotal()
      //eslint-disable-next-line
  }, [])

  return (
    <div className='mt-2 col-md-9 me-sm-auto col-lg-10 px-md-4 pb-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column p-3 mx-3'>
        <div className='col-md-12'>
          <h1 className='text-center my-4'>Resumen de cuenta</h1>
          <table className="table caption-top">
              <thead>
                <tr>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
          {
          carrito.length>0? carrito.map(product =>
            (
              <tr>
                <th>{product.quantity}x</th>
                <td>{product.name}</td>
                <td>$ {product.price * product.quantity}</td>
              </tr>)
            ):
            <div className=''>
              <h1 className='text-center col-12 col-md-12 mb-4'>Compra exitosa</h1>                      
            </div>
          }
          </tbody>
          </table>
        </div>
        <div className='col-md-12 text-end '>
          <h4>Total: ${suma}</h4>
        </div>
        <div className= 'd-flex justify-content-end align-middle mt-4'>
          <Link from='/cart/purchase' exact to='/cart' className='mx-3 btn btn-outline-dark-blue' >Modificar Carrito</Link>                        
          <button type='submit' className='align-middle btn btn-outline-success'>Comprar</button>
        </div>
      </form> 
    </div>
  )
}

export default ResumeCart
