import React from 'react'
import { NavLink } from 'react-router-dom'
import  s from './style.module.css'

export default function Nav() {

    const links = [
        {
            id: 1,
            title: 'Home',
            link: '/'
        },
        {
            id: 2,
            title: 'Author',
            link: '/author'
        },
        {
            id: 3,
            title: 'Companies',
            link: '/companies'
        },
        {
            id: 4,
            title: 'Articles',
            link: '/articles'
        }
    ]
   
//   const checkActive = (({isActive}) => isActive? s.active: '' )
  const checkActive = ({isActive}) => {
    return isActive ? s.active: ''
  }

  return (
    <nav className={s.nav}>
        <div className={s.menu}>
            {links.map(({id,title,link})=> 
                <NavLink className={checkActive} key={id} to={link}>
                        {title}
                </NavLink>)
            }
        </div>
        <button className={s.button}>Order Today</button>
    </nav>
  )
}
