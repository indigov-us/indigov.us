import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer style={{ backgroundColor: '#171717', color: '#fff' }}>
      <div className='container my-12'>
        <hr className='mt-16 mb-6' style={{ borderColor: '#fff' }} />
        <div className='md:grid grid-cols-3'>
          <div>
            <Img fixed={data.logoImage.childImageSharp.fixed} />
            <div className='mt-6 text-silver-chalice leading-snug'>We are a group of technologists working to bridge the gap between Silicon Valley and government</div>
            <div className='mt-4 text-silver-chalice'>80 M St SE Washington, DC 20003</div>
          </div>
          <div></div>
          <div className='md:text-right my-6 md:my-0'>
            <a className='block' href='mailto:press@indigov.com'>
              Press Inquiries
            </a>
            <a className='block' href='/cookie-policy'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
