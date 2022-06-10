import { KFCLogo } from '../KFCLogo'
import { NavUtilMenu } from './NavUtilMenu'
import { MainNav } from './MainNav'

import './Nav.scss'

export const Nav = () => {
  return (
    <div>
      <div className="nav">
        <KFCLogo />
        <NavUtilMenu />
      </div>
      <MainNav
        links={[
          {
            title: 'Everyday Value',
            url: '/collection/everyday-value',
          },
          {
            title: 'Ala Carte & Combos',
            url: '/collection/ala-carte-and-combos',
          },
          {
            title: 'Signature Boxes',
            url: '/collection/signature-boxes',
          },
          {
            title: 'Sharing',
            url: '/collection/sharing',
          },
          {
            title: 'Promotions',
            url: '/collection/promotions',
          },
          {
            title: 'Snacks',
            url: '/collection/snacks',
          },
        ]}
      />
    </div>
  )
}
