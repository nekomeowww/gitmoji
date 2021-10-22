// @flow
import React, { type Element } from 'react'
import Link from 'next/link'

import Icon from 'src/components/Icon'
import styles from './styles.module.css'

const Footer = (): Element<'footer'> => (
  <footer className={styles.footer}>
    <div className="wrap">
      <div className="row middle-xs">
        <div className={`col-sm-6 ${styles.madeWithLove}`}>
          <h3>
            由 <a href="https://carloscuesta.me">Carlos Cuesta</a> 制作， 由{' '}
            <a href="https://github.com/nekomeowww">Ayaka Neko</a>{' '}
            完成中文本地化
          </h3>
        </div>
        <div className={`col-sm-6 ${styles.footerNav}`}>
          <nav>
            <Link href="/about">
              <a>关于</a>
            </Link>
            <Link href="/contributors">
              <a>贡献者</a>
            </Link>
            <a href="https://github.com/carloscuesta/gitmoji">GitHub</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
