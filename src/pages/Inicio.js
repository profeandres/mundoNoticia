import React from 'react'
import {Carousel} from '../components/comps'
import {TfiLayoutSlider} from 'react-icons/tfi'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <h1 className='inicio-h1'>Noticias del momento <TfiLayoutSlider/></h1>
        <Carousel/>
    </div>
  )
}
