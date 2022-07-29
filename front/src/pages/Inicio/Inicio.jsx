import React from 'react';

// import LoginComponent from '../../components/LoginComponent/LoginComponent'

// import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'

// import Login from '../Login/Login'
// import Register from '../Register/Register'
// import ButtonLogout from "../../components/Logout/ButtonLogout"

import './Inicio.scss';

const Inicio = () => {
  return (
    <div className='inicio'>
      <section className='preguntas'>
        <h4 className='inicioh4'>
          ¿Cuándo fue la última vez que compraste un paquete de cromos? ¿Cuántos
          álbumes has coleccionado?
        </h4>

        <h3 className='inicioh3'>¡¡Aquí tienes tu nuevo album de cromos!!</h3>
      </section>

      <section className='colecciona'>
        <h4 className='inicioh4'>
          Cada día cuentas con cromos nuevos, puedes pegarlos en tu álbum o
          cambiarlos con otros usuarios en el mercado.
        </h4>
        <h3 className='inicioh3'>¡Consíguelos todos!</h3>
      </section>

      <section className='link'>
        <h4 className='inicioh4'>
          Tú también puedes diseñar tus propios cromos, clica aquí para saber
          cómo
        </h4>
        <button className='buttonInicio'>
          <a href='https://www.bitmoji.com/' target='_blank'>
            LINK
          </a>
        </button>
      </section>
    </div>
  );
};

export default Inicio;
