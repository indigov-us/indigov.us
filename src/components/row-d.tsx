import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      bennyboyImage: file(relativePath: { eq: "bennyboy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className='md:grid grid-cols-3' style={{ background: 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)' }}>
      <div className='self-end'>
        <Img fluid={data.bennyboyImage.childImageSharp.fluid} style={{ maxWidth: 357 }} />
      </div>

      <div className='text-center self-center my-20'>
        <div className='montserrat uppercase tracking-widest text-xl'>What staffers are saying</div>
        <div className='mt-8 mb-5 tiempos-headline text-4xl leading-tight font-light'>
          &ldquo;For the ﬁrst time I feel like I have full insight into our mail and casework systems - I get custom reports delivered to me daily!&rdquo;
        </div>
        <div className='montserrat uppercase tracking-widest text-md'>Name title</div>
      </div>

      <div>&nbsp;</div>
    </div>
  )
}
