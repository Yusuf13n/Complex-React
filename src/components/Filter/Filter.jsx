import React from "react";
import style from "./Filter.module.scss";
import { FilterProps } from "./FilterProps";
import { items } from "./FilterProps";

export const Filter = () => {
  return (
    <div>
      <h1 className={style.filterTitle}>Более 100 свободных квартир <pre>редких форматов</pre></h1>
      {items.map((item, index) => (
        <FilterProps
          key={index}
          title={item.title}
          text={item.text}
          src={item.src}
        />
      ))}
    </div>
  );
};
