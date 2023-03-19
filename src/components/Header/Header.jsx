import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import s from './style.module.css'

export default function Header() {
  return (

    <div className={s.header}>
        <div className={["container", s.box].join(' ')}>
            <Logo/>
            <Nav/>
        </div>
    </div>
   
  )
}

