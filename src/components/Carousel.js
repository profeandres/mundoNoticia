import React from 'react'
import { useNoticia } from '../context/noticiasContext'
import {CarouselSlide} from './comps'

export const Carousel = () => {
    const {noticias} = useNoticia();
    console.log(noticias);
    return (
    <div className='slideshow-container'>
        {!noticias ? "" : noticias.map((el,index)=>
            <CarouselSlide data={el} key={index}/> 
        )}
    </div>
  )
}