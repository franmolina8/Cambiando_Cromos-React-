import React, { useContext, useState, useEffect } from "react";
import { API } from "../../sevices/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { JwtContext } from "../../context/jwtContext";
import { SWContext } from "../../context/context";

const BotonAnadir = ({ cromoID }) => {
  const navigate = useNavigate();
  const { user, setAlbum, setRepe, album, setUser } = useContext(JwtContext);
  const { getCromos, getUser } = useContext(SWContext);

  // const formData = {for (const iterator of user.album) { if (iterator._id === cromoID) {
  //   setAlbum({album: })
  // } }}

  let prueba;
  const [disable, setDisable] = useState(false);

  const decidir = () => {



    setDisable(true)
    if (user.album.length > 0) {
      for (const cromo of user.album) {
        if (cromo._id === cromoID) {
          prueba = { repetido: cromoID };
          break;
        } else {
          prueba = { album: cromoID };
        }
      }
    } else {
      prueba = { album: cromoID };
    }

    botonAnadir(prueba);

    
  };

  

  const botonAnadir = (prueba) => {
    API.patch("users/" + user._id, prueba).then((res) => {
      setUser(res.data.nuevo);
      setAlbum(res.data.nuevo.album);
      setRepe(res.data.nuevo.repetido);
      console.log(prueba.repetido);
      if (prueba.repetido) {
        Swal.fire({
          title: "Cromo Añadido a tus Cromos repetidos",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else {
        navigate("/album");
        Swal.fire({
          title: "Cromo Añadido a tu Album",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  useEffect(() => {
    getCromos();
  }, []);


 

  return (
    <button onClick={() => decidir()} disabled={disable}  className="añadir">
      AÑADIR
    </button>

  );
};

export default BotonAnadir;
