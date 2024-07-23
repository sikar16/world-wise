import React from 'react'
import Sidebar from '../Component/Sidebar'
import style from './AppLayout.module.css'
import Map from '../Component/Map'
import User from '../Component/User'
import ProectedRoute from './ProectedRoute'
function AppLayout() {
    return (
        <div className={style.app}>
            <ProectedRoute>
                <Sidebar />
                <Map />
                <User />
            </ProectedRoute>
        </div>
    )
}

export default AppLayout