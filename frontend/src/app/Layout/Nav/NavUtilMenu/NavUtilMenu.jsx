import { MdLocationPin, MdAccountCircle } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import './NavUtilMenu.scss'

export const NavUtilMenu = () => {
  const renderLink = ({ link, title, icon }) => (
    <li>
      <NavLink to={link}>
        {icon}
        <span>{title}</span>
      </NavLink>
    </li>
  )

  return (
    <ul className="nav__utils-menu">
      {renderLink({
        link: '/location',
        title: 'Store Locator',
        icon: <MdLocationPin />,
      })}
      {renderLink({
        link: '/auth/login',
        title: 'Sign In / Register',
        icon: <MdAccountCircle />,
      })}
    </ul>
  )
}
