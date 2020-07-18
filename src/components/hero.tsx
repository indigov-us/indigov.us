import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { requestADemoHref } from './header'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      marbleImage: file(relativePath: { eq: "marble.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className='ig-hero flex items-center justify-center relative overflow-hidden'>
      <div className='absolute w-full h-full'>
        <Img className='h-full' fluid={data.marbleImage.childImageSharp.fluid} />
      </div>

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
    </div>
  )
}
