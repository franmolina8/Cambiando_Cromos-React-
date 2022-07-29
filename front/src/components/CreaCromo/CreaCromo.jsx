import React, { useContext, useState } from "react";
import { JwtContext } from "../../context/jwtContext";
import { useForm } from "react-hook-form";
import { API } from "../../sevices/Api";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./CreaCromo.scss";

const CreaCromo = () => {
  const { register, handleSubmit } = useForm();
  const { setAdmin, setJwt, user, setUser } = useContext(JwtContext);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("cromos", formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));

      setJwt(localStorage.getItem("token"));
      setUser(res.data.data.user);

      if (res.data.data.user.rol === "admin") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    });

    navigate("/album");

    Swal.fire({
      title: "Cromo Creado",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  return (
    <>
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login"
          id="creacromo">
          
          <div className="agrupa">
            <div className="campo, opciones">
            <div className="campito">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                {...register("nombre", { required: true })}
              />
            </div>
            <div className="campitoposicion">
              <label htmlFor="posicion">Posicion</label>
              <input
                type="number"
                id="posicion"
                {...register("posicion", { required: true })}
              />
            </div>
            <div className="campito">
              <label htmlFor="nacionalidad">Nacionalidad</label>
              <input
                type="text"
                id="nacionalidad"
                {...register("nacionalidad", { required: true })}/>
            </div>
            </div>
            <div className="campo">
              <label htmlFor="imagen">Imagen</label>
              <input
                type="text"
                id="imagen"
                {...register("imagen", { required: true })}/>
            </div>

            <div className="campo">
              <label htmlFor="imagenBack">Imagen Back</label>
              <input
                type="text"
                id="imagen"
                {...register("imagenback", { required: true })}/>
            </div>

            <div className="campo, opciones">
              <div>
              <label htmlFor="lenguaje">Lenguaje</label>
              <select
                name="lenguaje"
                id="lenguaje"
                {...register("lenguaje", { required: true })}>
                <option value="React">react</option>
                <option value="Angular">Angular</option>
                <option value="Node">Node</option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML">HTML 5</option>
                <option value="MySQL">MySQL</option>
                <option value="PHP">PHP</option>
              </select>
              </div>

              <div>
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                {...register("status", { required: true })}
              >
                <option value="oro">Oro</option>
                <option value="plata">Plata</option>
                <option value="Bronce">Bronce</option>
              </select>
              </div>
            </div>
          </div>

          <div className="campo">
              <label htmlFor="frase">Frase</label>
              <input
                type="text"
                id="frase"
                {...register("frase", { required: true })}
              />
            </div>

          <div>
            <button type="submit" className="linkregistro" >
              CREAR CROMO
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreaCromo;
