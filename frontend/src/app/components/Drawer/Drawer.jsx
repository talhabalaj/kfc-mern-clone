import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cl from 'classnames'

import './Drawer.scss'

const createDrawerDomNode = () => {
  const newNode = document.createElement('div')
  newNode.setAttribute('id', 'drawer-node')

  return newNode
}

const Drawer = ({ isOpen = false, children, onClose }) => {
  const bodyRef = useRef(document.querySelector('body'))
  const domNodeRef = useRef(
    document.querySelector('#drawer-node') || createDrawerDomNode()
  )


  useEffect(() => {
    bodyRef.current.appendChild(domNodeRef.current)

    return () => {
      domNodeRef.current.remove()
      bodyRef.current.style.overflow = ''
      bodyRef.current.classList.remove('drawer-open')
    }
  }, [])

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = 'hidden'
        bodyRef.current.classList.add('drawer-open')
      } else {
        bodyRef.current.style.overflow = ''
        bodyRef.current.classList.remove('drawer-open')
      }
    }

    updatePageScroll()
  }, [isOpen])

  return createPortal(
    <div
      className={cl('drawer-container', {
        'drawer-container--open': isOpen,
      })}
    >
      <div className="backdrop" onClick={onClose}></div>
      <div
        className={cl('drawer', {
          'drawer--open': isOpen,
        })}
        role="dialog"
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>,
    domNodeRef.current
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func,
}

export { Drawer }
