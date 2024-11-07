import React from 'react'
import style from './Map.module.scss'

import map from '../../Images/Map/Layout.png'


export const Map = () => {
  return (
    <div className={style.mapContainer}>
        <p>Престижное расположение</p>
        <h2>Один из самых зелёных районов столицы — Раменки</h2>
        <img src={map} alt="" />
    </div>
  )
}
