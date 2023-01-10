import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/noticias.css';

export const NoticiasLayOut = () => {
  document.title  = "Noticias"
  return (
    <>
    <header className="noticias-header">
      <img className='noticias-header-img' src="https://res.cloudinary.com/dqivhqr2u/image/upload/v1672596929/utilities/noticias_p8lkow.jpg" alt="noticias-header" />
      <h1 className='noticias-header-h1'>NOTICIAS</h1>
    </header>
    <Outlet/>
    </>
  )
}