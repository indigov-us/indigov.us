import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'
import '../styles/layout.css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Indigov</title>
    </Helmet>

    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
