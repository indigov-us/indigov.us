import React from 'react'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='flex-grow'>{children}</main>
    <Footer />
  </div>
)

export default Layout
