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
        <img className='noticias-main-img' src={img_main.url} alt={subtitle} />
        <h2 className='noticias-main-h2'> {title} </h2>
        <p className='noticias-main-p'> {description} </p>
    </div>
  )
}