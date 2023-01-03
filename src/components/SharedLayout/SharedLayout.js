import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import ScrollToTop from './ScrollToTop'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux'

const SharedLayout = () => {

    const { collection } = useSelector((state) => {
        return state.user;
    })
    useEffect(() => {
        localStorage.setItem("collection", JSON.stringify(collection))
        // eslint-disable-next-line
    }, [collection])
    return (
        <div>
            <ToastContainer autoClose={2000} />
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default SharedLayout