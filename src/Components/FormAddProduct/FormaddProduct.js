import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { addNewProduct } from '../../Services/Products/addNewProduct';

function FormAddProduct({token}) {

  const { register, handleSubmit, formState: {errors}, reset  } = useForm({ defaultValues: { name: "", price: "", imgURL:"", stock:""} });
  const onSubmit = async(data) => {
    data.token = token
    await addNewProduct(data).then(res => res)
    swal({icon:'success', title:'¡Éxito!', text:'Producto Agregado con éxito!'})
    reset()
  }

  return (
    <div className="col-md-9 me-sm-auto col-lg-10 px-md-4 pb-5">
      <h1 className="text-center">Agregar Productos al Inventario</h1>
      <hr />
      <form className="row justify-content-center" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="d-flex flex-lg-row justify-content-lg-evenly flex-column align-items-center">
          <div className="col-lg-6 col-md-6 col-9 form-group mb-3">
            <h5 className="form-h5">Nombre del producto</h5>
            <input type="text" className="form-control"  name="name" 
            {...register("name", { required: true })} />
            {errors?.name?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
          </div>
          <div className="col-lg-3 col-md-6 col-9 form-group mb-3">
            <h5 className="form-h5">Precio</h5>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-cash-coin"></i></span>
              <input type="text" className="form-control"  name="price" min="0" 
              onKeyPress={(event) => !/[0-9]/.test(event.key)? event.preventDefault() : null}
              {...register("price", { required: true })} />
            </div>
            {errors?.price?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
          </div>  
        </div>
        <div className="d-flex flex-lg-row justify-content-lg-evenly flex-column align-items-center">
          <div className="col-lg-6 col-md-6 col-9 form-group mb-3">
            <h5 className="form-h5">URL de Imagen</h5>
            <input type="text" className="form-control"  name="imgURL" 
            {...register("imgURL", { required: true })} />
            {errors?.imgURL?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
          </div>
          <div className="col-lg-3 col-md-6 col-9 form-group mb-3">
            <h5 className="form-h5">Stock</h5>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-box"></i></span>
              <input type="number" className="form-control"  name="stock" min="0" 
              onKeyPress={(event) => !/[0-9]/.test(event.key)? event.preventDefault() : null}
              {...register("stock", { required: true })} />
            </div>
            {errors?.stock?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
          </div>  
        </div>
        <div className="d-flex flex-lg-row justify-content-center mt-2">
          <input type="submit" className="btn btn-success" value="Cargar producto"/>
        </div>
      </form>
    </div>
  )
}

export default FormAddProduct
