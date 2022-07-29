import React, { useContext } from "react";

import { SWContext } from "../../context/context";


const Aleatorio = () => {
  const { cromos } = useContext(SWContext);

  let cromosDiarios = Math.floor(Math.random() * (10 - 1) + 0);

  let pinta = cromos[cromosDiarios].imagen;


  let cromosDiarios1 = Math.floor(Math.random() * (10 - 1) + 0);

  let pinta1 = cromos[cromosDiarios1].rol;

  let cromosDiarios2 = Math.floor(Math.random() * (10 - 1) + 0);

  let pinta2 = cromos[cromosDiarios2].nombre;
  

  return (
    <div>
      
      <h3> el cromo al azar es: {pinta}</h3>
      <h3> el cromo al azar es: {pinta1}</h3>
      <h3> el cromo al azar es: {pinta2}</h3>



    </div>
  );
};

export default Aleatorio;
