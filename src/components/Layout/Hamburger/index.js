// @flow
import React, { type Element } from 'react'
import Router from 'next/router'

import MenuLink from './MenuLink'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import styles from './styles.module.css'

const Hamburger = (): Element<'div'> => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const onRouteChangeStart = () => {
      setIsOpen(false)
    }

    Router.events.on('routeChangeStart', onRouteChangeStart)

    return () => Router.events.off('routeChangeStart', onRouteChangeStart)
  }, [])

  return (
    <div className={styles.hamburger}>
      <button
        aria-label="Open navigation menu"
        className={styles.button}
        onClick={() => setIsOpen(true)}
      >
        <OpenIcon />
      </button>

      {isOpen && (
        <nav className={styles.menu}>
          <div className={styles.closeContainer}>
            <button
              aria-label="Close navigation menu"
              className={styles.button}
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <ul className={styles.links}>
            <li>
              <MenuLink href="/" text="首页" />
            </li>
            <li>
              <MenuLink href="/about" text="关于" />
            </li>
            <li>
              <MenuLink href="/contributors" text="贡献者" />
            </li>
            <li>
              <MenuLink href="/related-tools" text="相关工具" />
            </li>
            <li>
              <MenuLink
                href="https://github.com/carloscuesta/gitmoji"
                text="GitHub"
              />
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Hamburger
