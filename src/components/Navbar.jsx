import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'
import logo from '../assets/img/logo.png'

const Navbar = () => {
    
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <div className='links'>
                <NavLink className= {setActiveClass} to="/">Home</NavLink>
                <NavLink className={ setActiveClass } to="/Carrito">Carrito</NavLink>
            </div>
        </nav>
    )
    }

export default Navbar