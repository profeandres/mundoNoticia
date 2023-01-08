import React from 'react'
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
             MUNDO NOTICIAS
        </div>
        <span className="header-toggler">
            <HiMenu style={{"lineHeight":"0"}}/>
        </span>
        <nav className='header-nav'>
            <a className='header-nav-a' href={'/'}>Inicio</a>
            <a className='header-nav-a' href={'/noticias'}>Noticias</a>
            <a className='header-nav-a' href={'/about'}>Sobre Nosotros</a>
        </nav>
    </header>
  )
}