import React, { useContext } from 'react'
import Contexto from '../context/Context'
import '../assets/css/Carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'

const Carrito = () => {
  const {total, carro,agregarAlCarro, restarAlCarro, eliminarCarrito} = useContext(Contexto)

  return (
    <div className='carritoContainer'>
      <div className='carrito-left'>
          {carro.map((item) => {
              return (
              <div className='producto-container'>
                <div className='producto-imagen'>
                  <img src={item.imagen} alt="" />
                </div>

                <div className='producto-title'>
                  <h3>{item.nombre}</h3>
                  <button onClick={()=>eliminarCarrito(item.id)} >Eliminar</button>
                </div>

                <div className='producto-btns'>
                  <button className='btn-quitar' onClick={()=>restarAlCarro(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
                  <p>{item.cantidad}</p>
                  <button className='btn-agregar' onClick={()=>agregarAlCarro(item.id)}><FontAwesomeIcon icon={faPlus} /></button>
                </div>

                <div className='producto-subtotal'>
                  <p>$ {item.precioTotal}</p>
                </div>
              </div>)
            })}
      </div>
      <div className='carrito-right'>
        <h1>Resumen del pedido</h1>
        <p>TOTAL: $ {total}</p>
        <button>Continuar compra</button>
      </div>


      </div>
  )
}

export default Carrito