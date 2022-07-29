import React from 'react'
import "./Hamburguesa.scss";

const Hamburguesa = () => {


  return (

    <>
    <nav className="m">
     
      <div className="menuHamburguesa">
          <img src="https://cdn-icons.flaticon.com/png/512/4212/premium/4212346.png?token=exp=1657552749~hmac=529c9f4bb56d6ccfedc444c766819c35" alt="menu desplegable" className="Hamburguesa" />
      </div>
      <div className="logo">
          <img src='./assets/LogoCromos.png' alt='logo' />
          <h3>CROMIFY</h3>
        </div>
    </nav>
      </>
  )
}

export default Hamburguesa;

// estilos a través de un estado añadiendo y quitando una clase cuando cambie el estado con seteador y que setee el nombre de la clase que quieres aplicar y que se setee el nombre de la clase