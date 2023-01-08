import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NoticiaCard = ({data}) => {
    const {_id, img_main, title, subtitle, description} = data
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