import React from 'react'
import '../hojas-estilos/Boton.css'

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !='.') && (valor != '=');
    }
  return (
              // clase de los botones  SI esOperador es True reempazamos por 'operador' SINO null el trimEnd elimina los espacios del final
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
    {/* <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : 'null'}`}  es ente caso se mostraria el null en consola*/}
      {props.children}
    </div>
  )
}



export default Boton

