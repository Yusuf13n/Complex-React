import React from "react";
import style from "./Header.module.scss";

import left from "../../Images/Header/Left.png";
import right from "../../Images/Header/Right.png";
import { Yusuf } from "../Pages/Yusuf";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.head}>
      <div className={style.left}>
        <img src={left} alt="logo" />
      </div>

      <div className={style.right}>
        <p>+7 495 845 19 34</p>
        {/* <Link to='./Yusuf' >AAAAAA</Link> */}
        <p style={{ color: "#A0A747" }}>работаем</p>
      </div>
    </div>
  );
};
