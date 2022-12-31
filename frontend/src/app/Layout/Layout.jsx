import './Layout.scss'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Ribbon } from './Ribbon/Ribbon'
import { Outlet } from 'react-router-dom'

const Warning = () => {
  return <div className="warning">
    This site is not KFC and has no affiliation with KFC, this site was made as a learning project. You can't order anything here. 
  </div>
}

export const Layout = () => {
  return (
    <div className="layout">
      <Warning />
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
