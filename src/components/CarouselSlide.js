import React from "react";

export const CarouselSlide = ({ data, index, length, show}) => {
  const { img_main= {url:'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}, title, subtitle, description } = data;
  return (
    <div className={show === index ? "slide" : "slide fade"}>
      <img className="slide-img" src={img_main.url} alt={subtitle} />
      <div className="slide-numbertext">{`${index + 1} / ${length}`}</div>
      <div className="slide-info">
      <h2 className="slide-h2">{title}</h2>
      <p className="slide-p">{description}</p>
      </div>
    </div>
  );
};
