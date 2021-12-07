import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'
import { signUp } from '../../Services/Users/signUp'
import './register.css'

function Register() {
  
  const[registerErrors,setregisterErrors] = useState([])
  const {register, handleSubmit, formState: {errors}, getValues } = useForm({ defaultValues: { username:"", email:"", emailConfirmation:"", password:"", passwordConfirmation:""}})

  const onSubmit = async (data) => {
    const register = await signUp(data).then(res => res )
    if(register?.errors) setregisterErrors(register.errors)
    if(register.token) {
      swal("¡Buen trabajo!","Usuario creado con éxito","success")
      .then((confirm) => {
        if (confirm) {
          window.location.replace('/login')
        }
      })
    }
  }


  return (
    <div className="size-register">
      <form className="container box-register" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="m-0">Registrarse</h2>
        <hr className="mt-0 mb-2"/>
        <div className="mx-auto pt-2 form-group">
          <h5 className="ps-2">Usuario</h5>
          <input type="text" className="form-control"  minLength='5' maxLength='15' placeholder="Nombe de usuario" name="username" {...register("username", {required: true, minLength:5, maxLength:15})} />
          {errors?.username?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
          {errors?.username?.type === "minLength" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Your username must be at least 5 characters long</span>}
          {errors?.username?.type === "maxLength" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Your username must not exceed 15 characters</span>}
          { registerErrors?.map(error => 
            (error?.param === 'username' && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>{error.msg}</span>))
          }
        </div>
        <div className="d-flex flex-column flex-lg-row">
          <div className="me-lg-2 pt-2 form-group w-100">
            <h5 className="ps-2">Correo electrónico</h5>
            <input type="text" className="form-control" placeholder="example@example.com" name="email" {...register("email", {required: true, pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/})} />
            {errors?.email?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
            {errors?.email?.type === 'pattern' && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Insert a valid mail</span> }
            { registerErrors?.map(error => 
              (error?.param === 'email' && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>{error.msg}</span>))
            }
          </div>
          <div className="ms-lg-2 pt-2 form-group w-100">
            <h5 className="ps-2">Confirma tu correo</h5>
            <input type="email" className="form-control" placeholder="example@example.com" name="emailConfirmation"  {...register("emailConfirmation", {required: true, pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, validate:
              {
                matchesPreviousEmail: (value) => 
                {
                  const { email } = getValues();
                  return (email !== "" && email === value)
                }
              }})} />
            {errors?.emailConfirmation?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
            {errors?.emailConfirmation?.type === 'pattern' && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Insert a valid mail</span> }
            {errors?.emailConfirmation?.type === 'matchesPreviousEmail' && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Email should match!</span>}
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row">
          <div className="me-lg-2 pt-2 form-group w-100">
            <h5 className="ps-2">Contraseña</h5>
            <input type="password" className="form-control" placeholder="Contraseña" name="password" {...register("password", {required: true, minLength:8})} />
            {errors?.password?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
            {errors?.password?.type === "minLength" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Password must be at least 8 characters long</span>}
          </div>
          <div className="ms-lg-2 pt-2 form-group w-100">
            <h5 className="ps-2">Confirma tu contraseña</h5>
            <input type="password" className="form-control" placeholder="Contraseña" name="passwordConfirmation" 
            {...register
              ("passwordConfirmation",{ required: true, minLength:8, validate:
              {
                matchesPreviousPassword: (value) => 
                { const { password } = getValues();
                  return (password !== "" && password === value)
                }
              },
            })} />
            {errors?.passwordConfirmation?.type === "required" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
            {errors?.passwordConfirmation?.type === "minLength" && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Password must be at least 8 characters long</span>}
            {errors?.passwordConfirmation?.type === 'matchesPreviousPassword' && <span className="error"><i className="bi bi-exclamation-octagon-fill me-2"></i>Password should match!</span>}
          </div>
        </div>
        <div className="mx-auto pt-2 form-group d-flex justify-content-end">
          <NavLink to='/login' type="button" className="mt-2 me-2 btn btn-outline-dark-blue">Volver al Inicio</NavLink>
          <input type="submit" className="mt-2 btn btn-outline-success" value="Registrarse" />
        </div>
      </form>
    </div>
  )
}

export default Register
