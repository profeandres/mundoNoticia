import React from 'react'
import {Link} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi' 
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate() 
    const handleClick =()=>{
    navigate('/noticias')
  }
  
    return (
    <header className="header">
        <div className="header-logo" onClick={handleClick}>
            <img className="header-logo-img" src="https://res.cloudinary.com/dqivhqr2u/image/upload/v1673108892/utilities/noticias-logo-removebg_ci5hdm.png" alt="" />
            NOTICIAS MUNDO
        </div>
        <span className="header-toggler">
            <HiMenu style={{"lineHeight":"0"}}/>
        </span>
        <nav className='header-nav'>
            <Link className='header-nav-a' to={'/'}>Inicio</Link>
            <Link className='header-nav-a' to={'/noticias'}>Noticias</Link>
            <Link className='header-nav-a' to={'/about'}>Sobre Nosotros</Link>
        </nav>
    </header>
  )
}