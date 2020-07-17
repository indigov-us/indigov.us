import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      marbleImage: file(relativePath: { eq: "marble.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className='flex items-center justify-center relative overflow-hidden' style={{ height: '40vh' }}>
        <div className='absolute w-full'>
          <Img fluid={data.marbleImage.childImageSharp.fluid} />
        </div>

        <div className='relative text-white text-center' style={{ maxWidth: 716 }}>
          <h2>A next generation constituent experience management platform designed for government</h2>
          <div>
            <button className='uppercase text-governor-bay' style={{ backgroundColor: '#E0E0E0' }}>
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
