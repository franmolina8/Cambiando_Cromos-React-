import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { API } from "../../sevices/Api";
import "./RegisterComponent.scss";


const RegisterComponent = () => {

    const { register, handleSubmit } = useForm();
   

    const navigate = useNavigate ();

    const onSubmit = (formData) => {
        API.post("users/register", formData).then((res) => {
            console.log(res);
          });
          navigate("/");
    }


  return (

    <>


    <form onSubmit={handleSubmit(onSubmit)} className="register">
    <div className="campo">
    <label htmlFor="usuario">NOMBRE DE USUARIO</label>
      <input
        type="text"
        id="usuario"
        {...register("usuario", { required: true })}
      />
    </div>
    <div className="campo">
    <label htmlFor="email">EMAIL</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      </div>
      <div className="campo">
      <label htmlFor="password">CONTRASEÑA</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      </div>  
      <div>    
        <button type="submit" className="registrar">REGISTRARSE</button>
      </div>
      
     


    </form>


</>

    
  )
}

export default RegisterComponent