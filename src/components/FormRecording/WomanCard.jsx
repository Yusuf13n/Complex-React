import React from 'react'
import style from './WomanCard.module.scss'

import woman from "../../Images/Slider 1/woooman.svg";

export const WomanCard = () => {
  return (
    <div className={style.card}>
        <div className={style.cardLeft}>
          <h5>СПЕЦИАЛЬНО ДЛЯ ВАС</h5>
          <h2>
            <pre>Персональная</pre>
            <pre>презентация West Garden</pre>
          </h2>
          <p>&#8594; Подробно расскажем про жилой комплекс</p>
          <p>&#8594; Ознакомитесь со всеми планировками и ценами</p>
          <p>&#8594; Прогуляетесь по благоустроенной набережной</p>
          <div className={style.cardForm}>
            <div className={style.cardInput}>
              {/* <label htmlFor="number">Закрепить за номером</label> */}
              <input type="number" placeholder="+7 ___ ___-__-__" required />
              <button>Записаться на презентацию</button>
            </div>
          </div>
          <p className={style.info}>
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь <pre>c политикой конфиденциальности</pre>
          </p>
        </div>
        <div className={style.cardRight}>
          <div>
            <img src={woman} alt="woman" />
          </div>
          <div className={style.womanInfo}>
            <h4>
              Алёна <pre>Кирющенко</pre>
            </h4>
            <p>
              ведущий эксперт <pre>по недвижимости</pre> <pre>в ESTES</pre>
            </p>
          </div>
        </div>
      </div>
  )
}
