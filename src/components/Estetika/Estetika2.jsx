import React from "react";
import style from "./Estetika.module.scss"; 

import img1 from "../../Images/Estetika/1.png"; 
import img2 from "../../Images/Estetika/2.png";
import door from "../../Images/Estetika/door.png";

export const Estetika2 = () => {
  return (
    <div className={style.estetContainer}>

      <div className={style.estetCard}>
        <h2>
          <img src={door} alt="" />
          Центральные входные группы
        </h2>

        <div className={style.paragraph}>
          <p>&#9733; Зоны ожидания и встреч</p>
          <p>&#9733; Пост охраны</p>
          <p>&#9733; Переговорная комната</p>
          <p>&#9733; Колясочная</p>
        </div>
        <div className={style.estetImage}>
          <img src={img1} alt="Изображение" />
          <img src={img2} alt="Изображение" />
        </div>
      </div>
    </div>
  );
};