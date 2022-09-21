import React from 'react';
import cards from "./Cards.js";
import Card from "./Card";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/newsection.css";

export default function Service2() {

function createCard(cards) {
  return <Card
  id={cards.id}
  key={cards.id}
  title={cards.title}
  body={cards.body} />
}


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  cssEase: "linear",
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

   
};

  return (
    <div className="new-section">
    <Slider 
 
  {...settings}> 
    
        {cards.map(createCard)}
  
    
    </Slider>
    </div>
  )
}
