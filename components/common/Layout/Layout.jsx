import cn from 'classnames'
import React, { FC } from 'react'
import { Navbar, Sidebar } from '../../common'

import s from './Layout.module.css'

const Layout = ({ children, pageProps }) => {
  return (
    <div className={cn(s.root)}>
      <Sidebar />
      <main className={s.body}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default Layout
