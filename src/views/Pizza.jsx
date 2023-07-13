import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Contexto from '../context/Context';
import '../assets/css/Pizza.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Pizza = () => {
  const { id } = useParams();
  const {agregarAlCarro} = useContext(Contexto);

  const {pizzas} = useContext(Contexto);

  const pizza = pizzas.find(item => item.id === id);
  return (
    <div className='detallepizza'>
      <img src={pizza.img} alt="" />

      <div className='pizza-info'>
        <h1>{pizza.name}</h1>
        <p>{pizza.desc}</p>
        <h3>Ingedientes:</h3>
        <p>{pizza.ingredients.join(", ")}.</p>
        <div className='btn-contenedor'>
          <button className='btn-add' type='button' onClick={()=>agregarAlCarro(pizza.id)}>Añadir <FontAwesomeIcon icon={faCartShopping} /> </button>
        </div>
      </div>

    </div>
  )
}

export default Pizza