import React from 'react'
import logo from '../assets/img/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import '../assets/css/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <ul>
            <li>Menú</li>
            <li>Sucursales</li>
            <li>Contacto</li>
        </ul>
        <ul className='redes'>
            <li><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></li>
            <li><FontAwesomeIcon icon={faInstagram} size="2x"/></li>
            <li><FontAwesomeIcon icon={faYoutube} size="2x"/></li>

        </ul>
    </div>
  )
}

export default Footer