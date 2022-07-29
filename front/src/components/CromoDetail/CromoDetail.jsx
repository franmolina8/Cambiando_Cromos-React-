

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BotonBorrar from '../BotonBorrar/BotonBorrar';
import BotonEditar from '../BotonEditar/BotonEditar';
import { JwtContext } from '../../context/jwtContext';


import "./CromoDetail.scss"


const CromoDetail = () => {
  const { nombre } = useParams();
  const { id } = useParams();
  const [numero, setNumero] = useState();
  const [detalle, setDetalle] = useState();

  const { isAdmin } = useContext(JwtContext);

  useEffect(() => {
    const getCromoByNombre = async () => {
      const res = await axios.get(
        `http://localhost:8005/cromos/nombre/${nombre}`
      );
      setDetalle(res.data.cromo);

      // console.log("hola");
    };
    getCromoByNombre();
  },[]);

  useEffect(() => {
    const getCromoByID = async () => {
      const res = await axios.get(`http://localhost:8005/cromos/${id}`);
      setNumero(res.data.cromo);
     
    };
    getCromoByID();
  },[]);

  return (

    <>
    
      {detalle ? (
        <div className="padre">
          {" "}
          <div className="div1">
            <h1>{detalle.nombre}</h1>

            <p>{detalle.nacionalidad}</p>
            <p className="rol">{detalle.rol}</p>
            <p>{detalle.lenguaje}</p>

            <p>Rango: {detalle.status}</p>
            <button className="backToAlbum">
              <Link to="/album">VOLVER AL ALBUM</Link>
            </button>


            {isAdmin === '"admin"' && <BotonBorrar cromoID={detalle._id} />}
          </div>
          <div className="div2">
            <img src={detalle.imagenback} alt="imagenBack"></img>
            <p className="frase">{detalle.frase}</p>
          </div>
        </div>
      ) : null}
      </>
  );
};

export default CromoDetail;
