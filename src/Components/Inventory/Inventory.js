import React, { useEffect,useState } from 'react'
import { getAllProducts } from '../../Services/Products/getAllProducts'
import Spinner from '../Spinner/Spinner'

function Inventory({token}) {

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
        <div className="d-flex justify-content-between">
          <h1>Inventario de productos</h1>
          <h2><i className="bi bi-pencil-square"></i></h2>
        </div>
        <hr/>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="col-lg-3 col-2 ">id</th>
                <th scope="col" className="col-lg-5 col-5">Nombre</th>
                <th scope="col" className="col-lg-2 col-1">Precio</th>
                <th scope="col" className="col-lg-2 col-1">Stock</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(p =>(
                  <tr key={p._id}>
                    <th className="text-truncate">{p._id}</th>
                    <td>{p.name}</td>
                    <td>${p.price}</td>
                    <td>{p.stock}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      } 
    </div>
  )
}

export default Inventory
