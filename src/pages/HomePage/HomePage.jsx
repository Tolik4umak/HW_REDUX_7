import React from 'react'
import s from './style.module.css'
import hyphen from '../../media/Rectangle.png'
import cover from '../../media/Book_large.png'

export default function HomePage() {
  return (
    <div className={s.home}>
      <div className={[s.box,'container'].join(' ')}>

        <div className={s.info}>

          <div className={s.greeting}>
            <img src={hyphen} alt="" />
            <span>Welcome To Pages!!!</span>
          </div>
          <h3 className={s.title}>Your Books From The Best Writer.</h3>
          <p className={s.descr}>
            We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.
          </p>
 
          <div className={s.buttons}>
            <button className={s.order_button}>Order Today</button>
            <button className={s.demo_button}>Read Free Demo</button>
          </div>

          <div className={s.properties}>
            <div className={s.params}>
              <p className={s.param}>Pages</p>
              <p className={s.value}>250 pages</p>
            </div>
              <div className={s.params}>
              <p className={s.param}>Pages</p>
              <p className={s.value}>250 pages</p>
            </div>
              <div className={s.params}>
              <p className={s.param}>Pages</p>
              <p className={s.value}>250 pages</p>
            </div>
          </div>
  
        </div>

        <div className={s.photo}>
          <img src={cover} alt="" />
        </div>
      
      </div>
    </div>
  )
}
