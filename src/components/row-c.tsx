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
      <div className='self-center ml-8' style={{ maxWidth: 500 }}>
        <h2 className='tiempos-headline text-4xl leading-tight mb-6'>Not just a website</h2>
        <Accordion
          items={[
            {
              title: 'Constituent first',
              body:
                'A supporter is won or lost in every constituent interaction. Indigov websites are designed with the constituent in sharp focus so they can get what they need when they need it',
            },
            {
              title: 'Interactive service menu',
              body: 'Provide constituents a real-time menu where they can go to be educated on then access the array of services that your office provides.',
            },
            {
              title: 'Knowledge portal',
              body: 'Turn your website into an easy to navigate portal of key resources and help articles that can answer constituent questions before they even have to ask them.',
            },
            {
              title: 'Full site control',
              body: 'Power your site with a best in class CMS (content management system) to update all site pages, add new content, images, audio, video and more!',
            },
            {
              title: 'Make a connection',
              body: 'Don’t just answer a question, build a meaningful empathetic relationship with a constituent through amazing service and a beautifully articulated brand.',
            },
            {
              title: 'Best in class security',
              body: 'Our security experts and threat monitoring tools are testing and monitoring your site 24 hours day to ensure that your office is protected at all times.',
            },
          ]}
        />
      </div>
    </div>
  )
}
