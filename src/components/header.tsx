import { Link } from 'gatsby'
import React from 'react'

// @ts-ignore
import Logo from '../images/logo.svg'

export const requestADemoHref = 'mailto:contact@indigov.us'

const Header = () => (
  <header className='sticky top-0 py-10 bg-white w-full'>
    <div className='container'>
      <div className='flex justify-center md:grid md:grid-cols-2'>
        <div>
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        <div className='text-right hidden md:block'>
          <a className='px-5 py-3 tracking-widest text-xs bg-governor-bay text-white uppercase font-bold' href={requestADemoHref} target='_blank'>
            Request a demo
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
