import React from 'react'
import style from './Footer.module.scss'

import footer from '../../Images/Footer/Footer.png'

export const Footer = () => {
  return (
    <div className={style.footer}>
      <img src={footer} alt="footer" />
    </div>
  )
}
