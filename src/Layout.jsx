import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './Components/TopBar'
import Navgation from './Components/Navgation'

const Layout = () => {
    return (
        <div>
            <TopBar />
            <Navgation />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
