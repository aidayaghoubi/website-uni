import styledComponents from "styled-components";
import { useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainComponent from "../../Mainomponent";
import InnerCountainer from "../InnerContainer";




import Slider1 from "../../../assets/Scroll Group 6.png";
import Slider2 from "../../../assets/Scroll Group 9.png"
import Slider3 from "../../../assets/Scroll Group 10.png"

const SliderStyled = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;

.slider-wraper{

      & img{
        height: auto;
        width: 850px;
      }
}

.inner-column-container{
display: flex;  
}
.left-side{
  width: 80%;
  overflow: hidden;
}
.right-side{
  width: 20%;
}

`

const SLIDER_ITEMS = [
  {
    color: "Wite , Red",
    image: Slider1,
    release: "1988",
    collection: "DNA Archive",
  },
  {
    color: "Black , Red",
    image: Slider2,
    release: "1986",
    collection: "640 Rir Jordan",
  },
  {
    color: "blue",
    image: Slider3,
    release: "2002",
    collection: "R -palmer",
  },
]


const HomePageSlider = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  }

  const sliderItem = SLIDER_ITEMS.map((el, i) => {
    return <div className="slider-wraper">
      <img src={el.image} />
    </div>
  })

  return <SliderStyled>
      <InnerCountainer>
        <div className="inner-column-container">
          <div className="left-side">
            <Slider {...settings}>
              {sliderItem}
            </Slider>
          </div>
          <div className="right-side">
            <div className="column-info">
              <div className="info-box">
                <p>COLLECTION</p>
                <span></span>
              </div>
              <div className="info-box">
                <p>LOCATION</p>
                <span></span>
              </div>
              <div className="info-box">
                <p>COLOR</p>
                <span></span>
              </div>
              <div className="info-box">
                <p>ORIGINAL RELEASE</p>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </InnerCountainer>
  </SliderStyled>
}


export default HomePageSlider;