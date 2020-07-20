import { Link } from 'gatsby'
import React from 'react'

// @ts-ignore
import Logo from '../images/logo.svg'

export const requestADemoHref = 'mailto:contact@indigov.us'

const Header = () => (
  <header className='sticky top-0 py-8 bg-white w-full z-10'>
    <div className='container'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <Link to='/'>
          <Logo />
        </Link>

        <div className='mt-4 md:mt-0 hidden md:block'>
          <a className='inline-block px-5 py-3 tracking-widest text-xs bg-governor-bay text-white uppercase font-bold' href={requestADemoHref} target='_blank'>
            Request a demo
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
