import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'  // with help of react-routing-dom, doing nesting 

function Layout() {
  return (
    <>
      <Header />   {/* Fixed components */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
