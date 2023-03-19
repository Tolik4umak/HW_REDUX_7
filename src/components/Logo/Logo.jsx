import React from 'react'
import logo from '../../media/logo.png';
import s from './style.module.css'

export default function Logo() {


  return (
    <div className={s.container}>
        <div className={s.logos}>
            <img src={logo} alt="sdv" />
            <span>Pages</span>
        </div>
        <div className={s.social}>
            <button><i className="lab la-facebook-f"></i></button>
           <button> <i className="lab la-twitter"></i></button>
            <button><i className="lab la-instagram"></i></button>
        </div>
    </div>
  )
}

