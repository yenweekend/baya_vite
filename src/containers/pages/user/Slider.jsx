import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icons from '../../../utils/icons';
import { NextButton,PrevButton, Item } from '../../components';
const  SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", width :"48px", height: "48px"}}
        onClick={onClick}
      >
        <NextButton/>
      </div>
    );
  }
  const  SamplePrevArrow = (props)=>  {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex" , width :"48px", height: "48px", zIndex:'1'}}
        onClick={onClick}
      >
        <PrevButton/>
      </div>
    );
  }
  
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide : 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="container">
            <div className="slider-container w-full">
            <Slider {...settings}>
              <Item width={240}/>
              <Item width={240}/>
              <Item width={240}/>
              <Item width={240}/>
              <Item width={240}/>
              <Item width={240}/>
              <Item width={240}/>

            </Slider>
            </div>
        </div>
      );
}

export default SimpleSlider
