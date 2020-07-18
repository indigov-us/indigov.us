import { Link } from 'gatsby'
import React from 'react'

// @ts-ignore
import Logo from '../images/logo.svg'

const Header = () => (
  <header className='container py-10'>
    <div className='grid grid-cols-2'>
      <div>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='text-right'>
        <Link className='px-5 py-3 tracking-widest text-xs bg-governor-bay text-white uppercase font-bold' to='/'>
          Request a demo
        </Link>
      </div>
    </div>
  </header>
)

export default Header
