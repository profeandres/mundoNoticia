import React from 'react'
import {Carousel} from '../components/comps'
import {TfiLayoutSlider} from 'react-icons/tfi'

export const Inicio = () => {
  return (
    <div>
      <h1>Noticias del momento <TfiLayoutSlider/></h1>
        <Carousel/>
    </div>
  )
}
