import React from "react";
import style from "./Section.module.scss";

import one from "../../Images/SectionFourImage/1.png";
import two from "../../Images/SectionFourImage/2.png";
import three from "../../Images/SectionFourImage/3.png";
import four from "../../Images/SectionFourImage/4.png";

export const Section = () => {
  return (
    <div className={style.sectionContainer}>
      <div>
        <img src={one} alt="one" />
        <img src={two} alt="two" />
      </div>
      <div>
        <img src={three} alt="three" />
        <img src={four} alt="four" />
      </div>
    </div>
  );
};
