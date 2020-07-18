import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Accordion from '../components/accordion'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      exampleWebsiteImage: file(relativePath: { eq: "example-website.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className='md:grid grid-cols-2 col-gap-12 my-16 items-center'>
      <div>
        <Img fluid={data.exampleWebsiteImage.childImageSharp.fluid} />
      </div>
      <div className='self-center' style={{ maxWidth: 500 }}>
        <h2 className='tiempos-headline text-4xl leading-tight mb-6'>Not just a website</h2>
        <Accordion
          items={[
            {
              title: 'Constituent first',
              body: 'Manage cases and correspondence in the field with an award-winning downloadable mobile app that ensures you always have access to the functionalty you need.',
            },
            { title: 'Interactive service menu', body: '' },
            { title: 'Knowledge portal', body: '' },
            { title: 'Full site control', body: '' },
            { title: 'Make a connection', body: '' },
            { title: 'Best in class security', body: '' },
          ]}
        />
      </div>
    </div>
  )
}
