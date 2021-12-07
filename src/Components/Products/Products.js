import React,{useEffect, useState} from 'react'
import './products.css'
import { getAllProducts } from '../../Services/Products/getAllProducts';
import Spinner from '../Spinner/Spinner';


function Products({token}) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

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
                    <button className="btn btn-success"><i className="bi bi-cart me-2"></i>Añadir</button>
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
