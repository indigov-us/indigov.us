import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      marbleImage: file(relativePath: { eq: "marble.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className='absolute w-full h-full'>
      <Img className='h-full' fluid={data.marbleImage.childImageSharp.fluid} />
    </div>
  )
}
