import React from 'react'

import { requestADemoHref } from './header'
import MarbleImage from './marble-image'
// @ts-ignore
import DownArrow from '../images/down-arrow.svg'

export default () => {
  return (
    <div className='ig-hero flex items-center justify-center relative overflow-hidden'>
      <MarbleImage />

      <div className='relative text-white text-center mx-4' style={{ maxWidth: 716 }}>
        <h2 className='montserrat text-2xl md:text-4xl font-bold leading-tight mb-12' style={{ color: '#e0e0e0' }}>
          A next generation constituent experience management platform designed for government
        </h2>
        <div>
          <a
            href={requestADemoHref}
            target='_blank'
            className='inline-block montserrat py-3 px-6 tracking-widest font-bold uppercase text-governor-bay text-sm'
            style={{ backgroundColor: '#E0E0E0' }}
          >
            Request a demo
          </a>
        </div>
      </div>

      <div className='absolute bottom-0 flex items-center flex-col mb-4 md:mb-8'>
        <div className='text-white uppercase montserrat text-xs tracking-wider'>learn more</div>
        <DownArrow />
      </div>
    </div>
  )
}
