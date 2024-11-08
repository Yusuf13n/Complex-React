import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Slider.module.scss'

import img from '../../Images/Slider 1/img.png';
import img2 from '../../Images/Slider 1/2.png';
import { settings } from '../../config/config';

export const CarouselImg = () => {

  return (
    <div className={style.containerSlider}>
      <h1>Наслаждайтесь видами из окон своей квартиры</h1>
      <Slider {...settings}>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </Slider>
    </div>
  );
};
