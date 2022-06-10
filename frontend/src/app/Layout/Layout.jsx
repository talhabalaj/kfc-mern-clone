import './Layout.scss'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Ribbon } from './Ribbon/Ribbon'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="layout">
      <Ribbon />
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <Ribbon />
    </div>
  )
}
