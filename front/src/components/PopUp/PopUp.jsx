import React, { useContext } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { SWContext } from '../../context/context';

import Cromo from '../Cromo/Cromo';

const PopUp = () => {

    const {cromos} = useContext(SWContext)

  return (
    <Popup trigger={<button> ELEGIR CROMO QUE TE FALTA </button>} position="right center">
    <div>
        {cromos.map ((cromo) => 
        
            <Cromo cromoImg={cromo.imagen} cromoNombre={cromo.cromoNombre}/>
        
        )}
    </div>
  </Popup>
  )
}

export default PopUp


