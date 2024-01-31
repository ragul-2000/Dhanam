// Home.js

import React from 'react';
import "./Home.css";
import big1 from "../../../src/assets/big1.webp"
import big2 from "../../../src/assets/big2.jpg";
import big3 from "../../../src/assets/big3.jpg";
import big4 from "../../../src/assets/big4.jpg";
import big5 from "../../../src/assets/big5.jpg";
import Slider from '../../components/Slider/Slider';

const slides = [
  {
    id: 1,
    img: big1,
  },
  {
    id: 2,
    img: big2,
  },
  {
    id: 3,
    img: big3,
  },
  {
    id: 4,
    img: big4,
  },
  {
    id: 5,
    img: big5,
  }
];

const Home = () => {
  return (
    <div>
      <div className="h-container">
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Home;
