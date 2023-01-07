import React from 'react'
import { useNoticia } from '../context/noticiasContext'
import {CarouselSlide} from './comps'
import Loader from './Loader';

export const Carousel = () => {
    const {noticias} = useNoticia();
    console.log(noticias);
    console.log(process.env)
    return (
    <div className='slideshow-container'>
        <p> {process.env.REACT_APP_API_URI}</p>
        {!noticias ? <Loader/>: noticias.map((el,index)=>
            <CarouselSlide data={el} key={index}/> 
        )}
    </div>
  )
}