import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NoticiaCard = ({data}) => {
    const {_id, img_main= {url:'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}, title, subtitle, description} = data
    const router = useNavigate()
    const handleClick =()=>{
      router(`/noticias/${_id}`)
    }
    return (
    <div className='noticias-main-card' onClick={handleClick}>
        <img className='noticias-main-card-img' src={img_main.url} alt={subtitle} />
        <h2 className='noticias-main-card-h2'> {title} </h2>
        <p className='noticias-main-card-p'> {description} </p>
    </div>
  )
}