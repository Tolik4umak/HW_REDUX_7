import React from 'react'
import s from './style.module.css'
import avatar from '../../media/author.png'
import qr from '../../media/qr.png'


export default function Biography() {
  return (
    <div className={[s.box , 'container'].join(' ')}>
        <div className={s.img}>
            <div className={s.frame}>
                <img src={avatar} alt="" />
            </div>
        </div>

        <div className={s.content}>
            <h3 className={s.title}>About the Author</h3>
            <p className={s.descr}>
                We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.
            </p>
            <div className={s.properties}>
                <div className={s.property}>
                    <p className={s.num}>02</p>
                    <p className={s.category}>Books Published</p>
                </div>
                <div className={s.property}>
                    <p className={s.num}>4.5</p>
                    <p className={s.category}>User Reviews</p>
                </div>
                <div className={s.property}>
                    <p className={s.num}>04</p>
                    <p className={s.category}>Best Seller Awards</p>
                </div>
            </div>
            <div className={s.contacts}>
                <img src={qr} alt="" />
                <div className={s.contact_data}>
                    <h4 className={s.name}>John Abraham , Ph.d</h4>
                    <p className={s.info}>Mail: johnabraham@gmail.com</p>
                    <p className={s.info}>Phone: (+2) 123 545 9000</p>
                </div>
            </div>
        </div>

    </div> 
  )
}
