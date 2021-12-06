import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './login.css'

function Login() {
 // eslint-disable-next-line
  const[validInputs, setValidInputs] = useState(true)
  const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: { email: "", password: ""} });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="size-login">
      <form className="container box-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-2 form-group">
          <h5 className="ps-2">Correo electrónico</h5>
          <input type="email" className="form-control" placeholder="example@example.com" name="email" {...register("email", { required: true })} />
          {errors?.email?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
        </div>
        <div className="pt-2 form-group">
          <h5 className="ps-2">Contraseña</h5>
          <input type="password" className="form-control" placeholder="Contraseña" name="password" {...register("password", {required: true})} />
          {errors?.password?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
        </div>
        {validInputs?  true : (
          <div className="form-group fs-5 d-flex justify-content-center">
            <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Correo o contraseña inválidos</span>
          </div>
        )}
        <div className="mx-auto pt-2 form-group d-flex justify-content-end">
          <input type="submit" className="mt-2 btn btn-outline-dark-blue" value="Iniciar sesión" />
        </div>
      </form>
    </div>
  )
}

export default Login