import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
// add NavLinks
function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>Level</button>
            <div className={s.dropdownContent}>
            <NavLink to={'/pre-junior'} activeClassName={s.active}>PRE-JUNIOR</NavLink>
            <NavLink to={'/junior'} activeClassName={s.active}>JUNIOR</NavLink>
            <NavLink to={'/junior-plus'} activeClassName={s.active}>JUNIOR+</NavLink>
            </div>
        </div>
    )
}

export default Header
