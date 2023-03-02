import { useState } from 'react'

import './App.css'
import imagen from '../src/imagenes/calculadora.png'
import Boton from './component/Boton'
import Pantalla from './component/Pantalla'
import BotonClear from './component/BotonClear'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={imagen}
          className='logo'
          alt='logo'
        />
        
      </div>
        
      <div className='contenedor-calculadora'>
        <Pantalla/>
        <div className='fila'>
        <Boton>1</Boton>
        <Boton>2</Boton>
        <Boton>3</Boton>
        <Boton>+</Boton>
        </div>
        <div className='fila'>
        <Boton>4</Boton>
        <Boton>5</Boton>
        <Boton>6</Boton>
        <Boton>-</Boton>
        </div>
        <div className='fila'>
        <Boton>7</Boton>
        <Boton>8</Boton>
        <Boton>9</Boton>
        <Boton>*</Boton>
        </div>
        <div className='fila'>
        <Boton>=</Boton>
        <Boton>0</Boton>
        <Boton>.</Boton>
        <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
