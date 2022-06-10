import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Cart } from '../../../modules/cart'

import './MainNav.scss'

const MainNav = ({ links = [] }) => {
  const renderLink = (link, index) => {
    const { title, url } = link

    return (
      <li key={index}>
        <NavLink to={url}>{title}</NavLink>
      </li>
    )
  }

  return (
    <div className="main-nav">
      <ul>{links.map(renderLink)}</ul>
      <Cart />
    </div>
  )
}

MainNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export { MainNav }
