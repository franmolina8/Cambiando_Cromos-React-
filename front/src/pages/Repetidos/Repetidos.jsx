import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cromo from '../../components/Cromo/Cromo';
import { SWContext } from '../../context/context';
import { JwtContext } from '../../context/jwtContext';
import { API } from '../../sevices/Api';
import "./Repetidos.jsx";



const Repetidos = () => {
  const { repe, user, setUser, setRepe } = useContext(JwtContext);
  const { cromos } = useContext(SWContext);
  let idMercado;

  const sendMercado1 = (id) => {
    let wantedId;
    const select$$ = document.querySelector('#permuta');
    for (const cromo of cromos) {
      if (cromo.nombre === select$$.value) {
        wantedId = cromo._id;
      }
    }
    console.log('ESTO ES NUESTRO ID', id);
    let inso = { deleteCromo: id };
    let enviarCromo = { user1Id: user._id, cromo1Id: id };
    API.patch('users/eliminar/' + user._id, inso).then((res) => {
      console.log('probando patch', res.data.nuevo.repetido);
      setUser(res.data.nuevo);
      setRepe(res.data.nuevo.repetido);
    });
    API.post('mercado/', enviarCromo).then((res) => {
      console.log('holaaaaa');
      idMercado = res.data.createdMercado._id;
      console.log('esto es importante', idMercado);
      sendMercado2(wantedId, idMercado);
    });
    
  };

  const sendMercado2 = (id, idMercado) => {
    let inso = { wanted: id };
    console.log('este es nuestro id!', idMercado);
    API.patch('mercado/' + idMercado, inso).then((res) => {
      console.log('ESTE ES NUESTRO CONSOLE LOG', res);
    });
  };

  console.log(repe);
  return (
    <>
      <div className='album' id="repetido">
        {repe.map((use) => (
          <figure key={use._id} className="vertical">
            <Cromo cromoImg={use.imagen} cromoNombre={use.nombre}></Cromo>

            <div className='lateral'>

            <button onClick={() => sendMercado1(use._id)} className="linkregistro">
              CAMBIAR POR...{' '}
            </button>

            <select name='permuta' id='permuta'>
              {cromos.map((cromo) => (
                <option> {cromo.nombre} </option>
              ))}
            </select>
            </div>

            
          </figure>
        ))}
      </div>
    </>
  );
};

export default Repetidos;
