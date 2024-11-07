import React from "react";
import style from "./Otdelka2.module.scss";

import img from "../../Images/Otdelka2/L1.png";
import img2 from "../../Images/Otdelka2/L2.png";
import img3 from "../../Images/Otdelka2/L3.png";
import img4 from "../../Images/Otdelka2/L4.png";

export const Otdelka2 = () => {
  return (
    <div className={style.otdelkaContainer}>
      <h1>2 варианта отделки</h1>
      <div className={style.otdelkaTitleButton}>
        <h2>Светлая отделка</h2>
        <button>Скачать дизайн-буклет</button>
      </div>
      <div>
        <img src={img} alt="" />
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};
