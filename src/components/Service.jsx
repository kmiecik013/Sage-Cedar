
import "../styles/services.css";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import individual from '../images/individual.jpeg';
import group from '../images/group.jpeg';
import Card from "./Card";
import CardId1 from "./CardsId/CardId1.jsx";
import CardId2 from "./CardsId/CardId2.jsx";
import CardId3 from "./CardsId/CardId3.jsx";
import CardId4 from "./CardsId/CardId4.jsx";
import Sage from "./Sage";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';






export default function Service() {
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red", fontSize: "30px"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 10,
    cssEase: "linear",
    swipeToSlide: true,
    centerMode: true,
    
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll:4,
  
        }
      },
    ],

     
  };


return (
  <div className="service-part">
    <Slide top>
    <h1 className="service-title">Offerings</h1>
    </Slide>
    <div className="slider-part">

    <Slide bottom cascade>  
  <Slider 
 
  {...settings}> 


    <CardId1
    className="seperate-card" >
   </CardId1>
  
    <CardId2 
    className="seperate-card">
      </CardId2>
  
    <CardId3 className="seperate-card">
    </CardId3>
    
    <CardId4 className="seperate-card"></CardId4>
    
  
    
  </Slider>
  </Slide>
  <Sage />
  </div>
 </div>
)
}

