// Slider.js

import React, { useState } from 'react';
import leftArrow from "../../assets/arrowleft.png";
import rightArrow from "../../assets/arrowright.png";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
    marginTop: "10px"
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].img})`,
    objectFit: 'cover',
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '-150px', // Adjust the left position as needed
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '-150px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const dotsContainerStyles = {
    position: 'absolute',
    bottom: '10px',
    left: '50%', // Center horizontally
    transform: 'translateX(-50%)', // Center horizontally
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap : "20px"
  };

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    color: 'lightGray',
    fontSize: "40px"
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="slider" style={sliderStyles}>
      <div className="left-arrow" style={leftArrowStyles} onClick={goToPrevious}>
        <img className="arrow" src={leftArrow} alt="" />
      </div>
      <div className="right-arrow"style={rightArrowStyles} onClick={goToNext}>
        <img className="arrow" src={rightArrow} alt="" />
      </div>
      <div className="slidestyles" style={slideStyles}></div>
      <div className="dotscontainer" style={dotsContainerStyles}>
        {slides.map((slide, index) => (
          <div key={index} className='dots' style={dotStyles} onClick={() => goToSlide(index)}>
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
