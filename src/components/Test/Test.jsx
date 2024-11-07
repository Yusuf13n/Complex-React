import React from "react";
import style from "./Test.module.scss";

import img1 from "../../Images/Test/1.png";
import img2 from "../../Images/Test/2.png";

export const Test = () => {
  return (
    <div className={style.testCard}>
      <h1>
        Какая квартира <pre>подойдет именно вам?</pre>
      </h1>
      <p>
        Ответьте на 4 вопроса, чтобы подобрать{" "}
        <pre>идеальный вариант недвижимости</pre>
      </p>
      <button>Пройти тест</button>
      <div className={style.testImage}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};
