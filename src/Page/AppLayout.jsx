import React from 'react'
import Sidebar from '../Component/Sidebar'
import style from './AppLayout.module.css'
import Map from '../Component/Map'
function AppLayout() {
    return (
        <div className={style.app}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLayout