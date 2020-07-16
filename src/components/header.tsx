import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <Link to='/'>{siteTitle}</Link>
  </header>
)

export default Header
