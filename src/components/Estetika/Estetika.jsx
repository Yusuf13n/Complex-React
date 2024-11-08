import React from "react";
import style from "./Estetika.module.scss";

import img1 from "../../Images/Estetika/1.png";
import img2 from "../../Images/Estetika/2.png";
import door from "../../Images/Estetika/door.png";
import { Estetika2 } from "./Estetika2";

export const Estetika = () => {
  return (
    <div>
      <h1>Современная эстетика лобби</h1>
      <Estetika2 />
      <Estetika2 />
    </div>
  );
};
