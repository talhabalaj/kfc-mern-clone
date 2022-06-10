import { NavLink } from 'react-router-dom'

import './Footer.scss'

const footerLinks = [
  {
    title: 'Information',
    children: [
      {
        title: 'About Us',
        url: '/about-us',
      },
      {
        title: 'Mitao Bhook',
        url: '/mitao-bhook',
      },
      {
        title: 'Privacy Policy',
        url: '/privacy-policy',
      },
      {
        title: 'Careers',
        url: '/career',
        bold: true,
      },
    ],
  },
  {
    title: 'Food',
    children: [
      {
        title: 'Our Secret Recipe',
        url: '/secret-recipe',
      },
    ],
  },
  {
    title: 'Locations',
    children: [{ title: 'Find a Store', url: '/location' }],
  },
  {
    title: 'Get in Touch',
    children: [
      {
        title: 'Contact',
        url: '/contact',
      },
      {
        title: 'Join Us',
        url: '/join-us',
      },
      {
        title: 'Terms & Conditions',
        url: '/terms-and-conditions',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src="/assets/footer-logo.png" />
      </div>
      <div className="nav">
        {footerLinks.map((link, index) => (
          <ul key={index}>
            <li className="link-heading">{link.title}</li>
            {link.children.map((child, index) => (
              <li key={index} className={child.bold && 'link-heading'}>
                <NavLink to={child.url}>{child.title}</NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className='copyright'>© 2022 KFC Pakistan. All rights reserved.</div>
    </div>
  )
}
