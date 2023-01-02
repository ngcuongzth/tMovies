import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import ScrollToTop from './ScrollToTop'
const SharedLayout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default SharedLayout