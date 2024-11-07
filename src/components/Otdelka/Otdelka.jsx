import React from "react";
import style from "./Otdelka.module.scss";

import img1 from "../../Images/Otdelka/1.png";
import img2 from "../../Images/Otdelka/2.png";
import img3 from "../../Images/Otdelka/3.png";

export const Otdelka = () => {
  return (
    <div className={style.otdelka}>
      <div className={style.titleOtdelka}>
        <h1>Отделка от застройщика</h1>
        <p>
          Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой
        </p>
      </div>
      <div className={style.cards}>
        <div>
          <img src={img1} alt="" />
          <h3>
            Готовый <pre>дизайн-проект</pre>
          </h3>
          <p>
            Воспользуйтесь возможностью сразу же заняться меблировкой и
            благоустройством новой квартиры, как только получите ключи
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
          <h3>Чистота и тишина, без шума и пыли</h3>
          <p>
            Забудьте шум от «бесконечного ремонта» соседей и лифт,
            декорированный защитными материалами
          </p>
        </div>
        <div>
          <img src={img3} alt="" />
          <h3>
            Выгода за счет <pre>оптовых закупок</pre>
          </h3>
          <p>
            Благодаря оптовым закупкам застройщика, вы получаете возможность
            сэкономить на стоимости ремонта
          </p>
        </div>
      </div>
    </div>
  );
};
