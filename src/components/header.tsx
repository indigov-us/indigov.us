import { Link } from 'gatsby'
import React from 'react'

// @ts-ignore
import Logo from '../images/logo.svg'

const Header = () => (
  <header className='container'>
    <div className='grid grid-cols-2'>
      <div>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='text-right'>
        <Link className='bg-governor-bay text-white uppercase' to='/'>
          Request a demo
        </Link>
      </div>
    </div>
  </header>
)

export default Header
