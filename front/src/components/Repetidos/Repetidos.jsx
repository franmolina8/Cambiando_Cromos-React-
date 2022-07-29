import React, { useContext, useEffect, useState } from 'react'
import { SWContext } from '../../context/context'
import { JwtContext } from '../../context/jwtContext'
import Cromo from '../Cromo/Cromo';
import "./Repetidos.scss"

const Repetidos = () => {

  const {getCromos} = useContext(SWContext);

  const {repe} = useContext(JwtContext);

  useEffect(()=>{
    getCromos();
  },[])

  return (

    <>

<h3> ESTOS SON TUS CROMOS REPETIDOS</h3>

    <div className='divRepetidos'>

    
    {repe.map((use) => (
    <figure >
      <Cromo cromoImg={use.imagen} cromoNombre={use.nombre}></Cromo>
    </figure>
   ))}


    </div>

  
  
        
    </>

    
  )
}

export default Repetidos