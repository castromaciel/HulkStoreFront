import React,{useEffect, useState} from 'react'
import './products.css'
import { getAllProducts } from '../../Services/Products/getAllProducts';
import Spinner from '../Spinner/Spinner';
import swal from 'sweetalert';

function Products({token}) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const setLocalStorage = (data) =>{
    const item = data;
    const getLocal = JSON.parse(localStorage.getItem('cart'))
    if(!getLocal) localStorage.setItem('cart', "[]")

    const filter = getLocal.findIndex((x) => x._id === data._id)
    item.quantity ++
    if (filter !== -1) swal({
      icon: 'error',
      title: 'Opps...',
      text: 'El producto ya se encuentra en su carrito',
      confirmButtonColor : "#0B5ED7",
    })
    else {
      getLocal.push(item)
      swal({
        icon: 'success',
        title: '¡Eureca!',
        text: 'Producto agregado con éxito',
        confirmButtonColor : "#0B5ED7",
      })
    }

    localStorage.setItem('cart', JSON.stringify(getLocal))
  }

  useEffect(() => {
    setLoading(true);
    getAllProducts(token).then((data) => {
      setProducts(data)
      setLoading(false)
    })
  }, [token])


  return (
    <div className="mt-2 col-md-9 me-sm-auto col-lg-10 px-md-4">
      {loading?
        <Spinner />
        :
        <div>
          <h1 className="text-center">Nuestros productos!</h1>
          <div className="row justify-content-center row-cols-1 row-cols-lg-2 g-4">
            {products.map(p => 
            <div className="col" key={p._id}>
              <div className="card d-flex flex-column">
                <img src={p.imgURL} className="card-img-top align-self-center" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title text-truncate" title={p.name}>{p.name}</h5>
                  <h6>Precio: ${p.price}</h6>
                  <div className="w-100 d-flex justify-content-end">
                    {p.stock > 0 ? 
                    <button className="btn btn-success" onClick={() => {setLocalStorage(p)}}><i className="bi bi-cart me-2"></i>Añadir</button>
                    :
                    <button className="btn btn-danger"><i className="bi bi-cart me-2"></i>No Stock</button>
                  }
                  </div>
                </div>
              </div>
            </div>)
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Products
