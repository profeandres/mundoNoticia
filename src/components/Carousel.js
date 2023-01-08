import React, { useState } from "react";
import { useNoticia } from "../context/noticiasContext";
import { CarouselSlide } from "./comps";
import {Loader} from "./comps";
import "../styles/carousel.css";
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'


export const Carousel = () => {
  const { noticias } = useNoticia();
  const [show, setshow] = useState(0);
  
  const plusSlide=(inc)=>{
    if(show+inc===noticias.length){
        setshow(0)
    }else if(show+inc<0){
        setshow(noticias.length-1)
    }else{
        setshow(show+inc)
    }
  }

  return (
    <div className="slideshow-container">
      {noticias.length===0 ? (
        <Loader />
      ) : (
        noticias.map((el, index) => (
          <CarouselSlide
            index={index}
            data={el}
            key={index}
            length={noticias.length}
            show={show}
          />
        ))  
      )}
      <button className='slideshow-btn prev' onClick={()=>plusSlide(-1)}><GrLinkPrevious/></button>
      <button className='slideshow-btn next' onClick={()=>plusSlide(1)}><GrLinkNext/></button>
    </div>
  );
};
