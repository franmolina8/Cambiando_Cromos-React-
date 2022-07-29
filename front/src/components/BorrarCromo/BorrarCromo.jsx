import React from "react";
import Swal from "sweetalert2";
import { API } from "../../sevices/Api";
import { useNavigate } from "react-router-dom";

const BorrarCromo = ({cromoID}) => {


    const navigate = useNavigate();

  const borrarCromo = (id) => {
    console.log("entro a borrar")
    API.delete("cromos/" + id).then((Response) => {
      navigate("/album");

      Swal.fire({
        title: "Cromo borrado",
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  };

  return (
    <button onClick={() => borrarCromo(cromoID)} className="selecionador">
      borrar
    </button>
  );
}

export default BorrarCromo