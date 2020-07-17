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
      <div className='container'>
        <hr />
        <div className='md:grid grid-cols-3'>
          <div>
            <Img fixed={data.logoImage.childImageSharp.fixed} />
            <div className='text-silver-chalice'>We are a group of technologists working to bridge the gap between Silicon Valley and government</div>
          </div>
          <div>center</div>
          <div>right</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
