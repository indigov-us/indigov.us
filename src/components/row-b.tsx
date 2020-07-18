import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Accordion from '../components/accordion'

// @ts-ignore
import OpenTableLogo from '../images/logo-opentable.svg'
// @ts-ignore
import ShopifyLogo from '../images/logo-shopify.svg'
// @ts-ignore
import SlackLogo from '../images/logo-slack.svg'
// @ts-ignore
import UberLogo from '../images/logo-uber.svg'
// @ts-ignore
import VenmoLogo from '../images/logo-venmo.svg'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      devicesImage: file(relativePath: { eq: "devices.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 24.64%, #FFFFFF 47.56%, #FFFFFF 79.64%, #F8F8F8 100%)' }}>
      <div className='md:grid grid-cols-2 py-12'>
        <div className='self-center' style={{ maxWidth: 500, justifySelf: 'end' }}>
          <h2 className='tiempos-headline text-4xl leading-tight mb-6'>Never Miss a Message</h2>
          <Accordion
            items={[
              {
                title: 'Web and mobile app',
                body:
                  'Manage cases and correspondence in the field with an award-winning downloadable mobile app that ensures you always have access to the functionalty you need.',
              },
              { title: 'Smart automation', body: '' },
              { title: 'Real time analytics', body: '' },
              { title: 'Multi-channel integration', body: '' },
              { title: 'Smart tagging', body: '' },
              { title: 'Best in class security', body: '' },
            ]}
          />
        </div>

        <div>
          <Img fluid={data.devicesImage.childImageSharp.fluid} />
        </div>
      </div>

      <div className='container flex md:justify-center mt-10 pb-20'>
        <div>
          <div className='montserrat uppercase font-bold tracking-widest mb-6' style={{ color: '#6D7278' }}>
            Powered by software that powers
          </div>
          <div className='flex flex-col md:flex-row md:items-center'>
            <ShopifyLogo className='mr-8' />
            <VenmoLogo className='mr-8' />
            <SlackLogo className='mr-8' />
            <OpenTableLogo className='mr-8' />
            <UberLogo className='mr-8' />
          </div>
        </div>
      </div>
    </div>
  )
}
