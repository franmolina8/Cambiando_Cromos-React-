import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { JwtContext } from "../context/jwtContext";
import axios from "axios";

import ButtonLogout from "../components/Logout/ButtonLogout";
import { SWContext } from "../context/context";

const Navigator = () => {
  const { jwt, isAdmin, setAdmin, user} = useContext(JwtContext);
  
  

  const comprobarUsuario = async () => {
   const usuario = localStorage.getItem("user")
   console.log(usuario);
    setAdmin(usuario)
   };

  useEffect(() => {
    
    comprobarUsuario();
  }, [])

  

  return (

    <div className="navegador">
      <div className="logo">
        <img src="./assets/LogoCromos.png" alt="logo" />
        <h3>CROMIFY</h3>
      </div>

      
       
          <>
        
          <ul>

            {isAdmin === '"admin"' && (
              <>
                <li className="opcionmenu">
                  <Link to="/album">ÁLBUM</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/editar">DETALLES</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/crear">CREAR</Link>
                </li>
              </>
            )}

            {isAdmin === '"user"' && (
              <>
               <li className="opcionmenu">
                  <Link to="/inicio">INICIO</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/cromo">CROMOS</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/album">ÁLBUM</Link>
                </li>
                <li className="opcionmenu">
                  <Link to="/mercado">MERCADO</Link>
                </li>
              </>
        )}

            </ul>

            <ButtonLogout />
           
          </>
       

        
      

     
    </div>
  );
};

export default Navigator;


