import React from 'react'

export const NoticiaCard = ({data}) => {
    const {img_main, title, subtitle, description} = data
    return (
    <div className='noticias-main-card'>
        <img src={img_main} alt={subtitle} />
        <h2> {title} </h2>
        <p> {description} </p>
    </div>
  )
}