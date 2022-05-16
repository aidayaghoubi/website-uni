import styledComponents from "styled-components";
import { useRef, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainComponent from "../../Mainomponent";
import InnerCountainer from "../InnerContainer";




import Slider1 from "../../../assets/Scroll Group 6.png";
import Slider2 from "../../../assets/Scroll Group 9.png";
import Slider3 from "../../../assets/Scroll Group 10.png";
import bg from "../../../assets/Group 74.png"

// http://localhost:3000/static/media
// ../../../assets/Group 65.png
const SliderStyled = styledComponents.div`
margin:110px 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: url(http://localhost:3000${bg});


    .slider-wraper{

          & img{
            height: auto;
            width: 850px;
          }
    }
    .title {

      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom:15px;

      & h2{
        text-align: center;
        font-size: 50px;
        color: #fff;
        font-weight: bold;
        position: relative;

        &::after{
          content: '';
          width: 140%;
          height: 5px;
          right: 98%;
          position: absolute;
          bottom: 11px;
          background-color: #fff;
      }
    }
      & span {
        color: #B4B6B7;
        margin-top: 20px;
        font-size:24px;
      }
      
    }

    .inner-column-container {
        display: flex;  
    }

    .left-side {
        width: 68%;
        overflow: hidden;
    }

    .right-side {
        width: 20%;

        & #main-title{
          color: #fff;
          font-size: 58px;
          font-weight: bold;
        }

      .info-box {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 34px 0;
        
        & p {
          color: #fff;
          font-size: 20px;
        }

        & span {
          color: #B4B6B7;
          margin-top: 12px;
          font-size:16px;
        }
      }
    }

    .slickToGo {
      position: relative;
 
    
      & input {
        position: absolute;
      }


      & input[type=range] {
        transform: rotate(90deg)translate(254px, 177px);
        -webkit-appearance: none;
        width: 100%;
        background: #fd583e;
        width: 419px;
        height: 4px;
        box-shadow: 0px 0px 2px 3px #2d292957;
        border-radius: 150px;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 10px;
        border-radius: 3px;
        background: #ff4500;
        box-shadow: 0 0 2px 0 #555;
        transition: background .3s ease-in-out;
      }
}

`

const SLIDER_ITEMS = [
  {
    title: "IV",
    color: "Wite , Red",
    image: Slider1,
    release: "1988",
    collection: "DNA Archive",
  },
  {
    title: "II",
    color: "Black , Red",
    image: Slider2,
    release: "1986",
    collection: "640 Rir Jordan",
  },
  {
    title: "VI",
    color: "blue",
    image: Slider3,
    release: "2002",
    collection: "R -palmer",
  },
  {
    title: "I",
    color: "Black , Red",
    image: Slider2,
    release: "1986",
    collection: "640 Rir Jordan",
  }
]


const HomePageSlider = () => {

  const [index, setIndex] = useState(0);
  const [state, setState] = useState({
    slideIndex: 0,
    updateCount: 0
  })
  const ref = useRef()

  const settings = {

    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    afterChange: function (currentSlide) {
      setIndex(currentSlide);
      setState(state => ({ updateCount: state.updateCount + 1 }))
    },
    beforeChange: (current, next) => setState({ slideIndex: next })
  }

  const sliderItem = SLIDER_ITEMS.map((el, i) => {
    return <div className="slider-wraper">
      <img src={el.image} />
    </div>
  })

  return <MainComponent bg="http://localhost:3000/static/media/Group%2065.ade66d9f2e37c953f0ee.png">
    <SliderStyled>
      <div className="title">
        <h2>FIND YOUR STRIDE</h2>
        <span>All Is The Best</span>
      </div>
      <InnerCountainer>
        <div className="inner-column-container">
          <div className="left-side">
            <Slider {...settings} ref={ref}>
              {sliderItem}
            </Slider>
          </div>
          <div className="right-side">
            <div className="column-info">
              <div className="info-box">
                <p id="main-title">{SLIDER_ITEMS[index].title}</p>
              </div>
              <div className="info-box">
                <p>COLLECTION</p>
                <span>{SLIDER_ITEMS[index].collection}</span>
              </div>
              <div className="info-box">
                <p>LOCATION</p>
                <span>{SLIDER_ITEMS[index].release}</span>
              </div>
              <div className="info-box">
                <p>COLOR</p>
                <span>{SLIDER_ITEMS[index].color}</span>
              </div>
              <div className="info-box">
                <p>ORIGINAL RELEASE</p>
                <span>{SLIDER_ITEMS[index].release}</span>
              </div>
            </div>
          </div>
          <div className="slickToGo">
            <input
              onChange={e => ref.current.slickGoTo(e.target.value)}
              value={state.slideIndex}
              type="range"
              min={0}
              max={3}
            />
          </div>
        </div>
      </InnerCountainer>
    </SliderStyled>
  </MainComponent>
}


export default HomePageSlider;