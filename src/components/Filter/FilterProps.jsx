import React from "react";
import style from "./Filter.module.scss";

import img1 from "../../Images/Filter/1.png";
import img2 from "../../Images/Filter/2.png";
import img3 from "../../Images/Filter/3.png";
import img4 from "../../Images/Filter/4.png";

export const items = [
  {
    src: img1,
    title: "Свободная планировка, возможность объединить квартиры до 500 м²",
    text: "Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера",
  },
  {
    src: img2,
    title: "Настоящий дровяной камин ",
    text: "В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года",
  },
  {
    src: img3,
    title: "Собственная терраса до 17 м²",
    text: "Современная террасса с необыкновенными видами на благоустроенную набережную, МГУ им. М.В. Ломоносова и Воробьевы горы",
  },
  {
    src: img4,
    title: "Увеличенная высота потолка",
    text: "Почувствуйте простор помещений в полной мере с увеличенной высотой потолка 4,2 м",
  },
];

export const FilterProps = ({ title, text, src }) => {
  return (
    <div className={style.filterContainer}>
      <div className={style.filterCard}>
        <div className={style.filterCardLeft}>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={style.priceCard}>
            <p>Узнать стоимость &#8594;</p>
          </div>
        </div>
        <div className={style.filterCardRight}>
          <img src={src} alt={title} />
        </div>
      </div>
    </div>
  );
};
