import React, { useContext } from 'react';
import "./BotonEditar.scss";
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { API } from '../../sevices/Api';
import Swal from "sweetalert2";


const BotonEditar = ({cromoID}) => {

    const navigate = useNavigate();
    const {setJwt, setUser, setAdmin} = useContext(JwtContext);


    const editarCromo= (id) => {
        console.log(id);
        API.patch("cromos/" + id).then((Response)=>{
            console.log(Response)

            navigate("/album");

            Swal.fire({
                title: "Cromo Editado",
                icon: "success",
                confirmButtonText: "Cool",
              });

        })

    }


return (
    <button className="editar">
        <img src='https://cdn-icons-png.flaticon.com/512/420/420140.png' alt="editar" onClick={editarCromo} className="lapiz"/>
    </button>
)
  
  

  
}

export default BotonEditar;