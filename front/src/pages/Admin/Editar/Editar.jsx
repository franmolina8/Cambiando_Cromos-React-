import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Cromo from '../../../components/Cromo/Cromo';
import { SWContext } from '../../../context/context';

const Editar = () => {
  const { cromos, getCromos } = useContext(SWContext);
  const [getCromo, setGetCromo] = useState();

  return (
  
    <>
    <div className="mialbum">
    <div className="arriba">
      <img src='https://cdn-icons-png.flaticon.com/512/1902/1902705.png' alt='album'></img>
      <h1 className='tituloEditar'>Clica para más opciones</h1>
      <img src='https://cdn-icons-png.flaticon.com/512/1902/1902705.png' alt='album'></img>
    </div>
    <div className="album">{cromos.map((cromo) => (
      <Link key={cromo._id} to={`${cromo.nombre}`}>
        <figure key={cromo._id} onClick={() => setGetCromo(cromo.imagen)}>
          <Cromo
            cromoImg={cromo.imagen}
            cromoNombre={cromo.nombre}></Cromo>
        </figure>
      </Link>
    ))}</div>
    </div>
    </>
  )
}

export default Editar

// onClick={() => setGetCromo(cromo.imagen)}