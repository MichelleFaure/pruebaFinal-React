import React, { useContext } from 'react'
import '../assets/css/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Contexto from '../context/Context'

const Card = ({pizza}) => {
  const navigate = useNavigate();
  
 const {agregarAlCarro} = useContext(Contexto);

  const verMas = (id) => {
    navigate(`/Pizza/${id}`);  
  }



  return (
    <div className='cardContainer'>
      <img src={pizza.img} alt="" /> 
      <div className='cardInfo'>
        <h3>{pizza.name}</h3>
        <h4>Ingredientes:</h4>
        <p className='ingredientes'>{pizza.ingredients.join(", ")}.</p>
        <p className='precio'>$ {pizza.price}</p>
        <div className='btn-container'>
            <button  className='btn-vermas' type='button' onClick={()=>verMas(pizza.id)}>Ver Más</button>
            <button className='btn-add' type='button' onClick={()=>agregarAlCarro(pizza.id)}>Añadir <FontAwesomeIcon icon={faCartShopping} /> </button>
        </div>
      </div>

    </div>
  )
}

export default Card