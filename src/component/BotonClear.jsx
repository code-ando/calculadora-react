import React from 'react';
import '../hojas-estilos/BotonClear.css'

const BotonClear = (props) => {
  return (
    <div className='boton-clear'>
      {props.children}
    </div>
  );
};





export default BotonClear;


