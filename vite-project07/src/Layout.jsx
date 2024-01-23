import React from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/header'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
