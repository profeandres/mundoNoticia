import React from 'react'

export const CarouselSlide = ({data}) => {
  const {img_main, title, subtitle,description} = data
  return (
    <div>
        <img src={img_main.url} alt={subtitle} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
