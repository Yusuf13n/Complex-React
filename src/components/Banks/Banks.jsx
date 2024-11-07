import React from 'react'
import style from './banks.module.scss'

import logo from '../../Images/Footer/logos.png'
import inteko from '../../Images/Footer/INTEKO.png'

export const Banks = () => {
  return (
    <div className={style.bankContainer}>
        <img src={inteko} alt="" />
        <h1>Самые выгодные условия <pre>кредитования от 20 банков</pre></h1>
        <img src={logo} alt="logo" />
    </div>
  )
}
