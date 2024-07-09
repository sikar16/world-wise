import React from 'react'
import style from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'
function Sidebar() {
    return (
        <>
            <div className={style.sidebar}>
                <Logo />
                <AppNav />
                <Outlet />
                <footer className={style.footer}>
                    <p className={style.copyright}>&copy; copyright {new Date().getFullYear()} World wise INC.</p>
                </footer>
            </div>
        </>
    )
}

export default Sidebar