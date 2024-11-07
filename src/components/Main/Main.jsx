import React from "react";
import style from "./Main.module.scss";

import title from "../../Images/Main/title.png";
import image from "../../Images/Main/img.png";

export const Main = () => {
  return (
    <div>
      <div className={style.title}>
        <span>
          <img src={title} alt="title" />
        </span>
        <h1>
          <pre>Жизнь в зеленом оазисе</pre>
          <pre>в статусном районе Москвы</pre>
        </h1>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
