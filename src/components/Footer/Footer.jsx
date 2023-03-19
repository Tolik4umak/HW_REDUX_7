import React from 'react'
import s from './style.module.css'
import Logo from '../Logo/Logo'

export default function Footer() {




  return (

    <div className={s.footer}>
        <div className={["container", s.box].join(' ')}>
            
            <div>
                <Logo/>
            </div>

            <div>
                <h3 className={s.title}>Explore</h3>
                <ul className={s.list}>
                    <li className={s.list_item}>Home</li>
                    <li className={s.list_item}>About</li>
                    <li className={s.list_item}>Articles</li>
                    <li className={s.list_item}>Our Store</li>
                    <li className={s.list_item}>Contact Us</li>
                </ul>
            </div>

            <div>
                <h3 className={s.title}>Utility Pages</h3>
                <ul className={s.list}>
                    <li className={s.list_item}>Style Guide</li>
                    <li className={s.list_item}>404 Not Found</li>
                    <li className={s.list_item}>Password Protected</li>
                    <li className={s.list_item}>Licenses</li>
                    <li className={s.list_item}>Changelog</li>
                </ul>
            </div>

            <div>
                <h3 className={s.title}>Keep in Touch</h3>
                <div className={s.contact}>
                    <p className={s.info}>Address :</p> 
                    <span className={s.desc}>24A Kingston St, Los Vegas</span>
                </div>
                <div className={s.contact}>
                    <p className={s.info}>Mail :</p> 
                    <span className={s.desc}>support@pages.com</span>
                </div>
                <div className={s.contact}>
                    <p className={s.info}>Phone :</p> 
                    <span className={s.desc}>(+22) 123 - 4567 - 900</span>
                </div>
            </div>

        </div>
    </div>

  )
}
