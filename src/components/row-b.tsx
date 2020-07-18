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
      <div className='md:grid grid-cols-2 col-gap-8 pt-12 mb-12 mx-6 items-center'>
        <div className='self-center mb-10' style={{ maxWidth: 500, justifySelf: 'end' }}>
          <h2 className='tiempos-headline text-4xl leading-tight mb-6'>Never Miss a Message</h2>
          <Accordion
            items={[
              {
                title: 'Smart Automations',
                body:
                  'Reduce average response time from weeks and months to minutes by leveraging the same workflows and automation tech used by companies like AirBnb, Uber and Slack.',
              },
              {
                title: 'Optimized workflows',
                body:
                  'Designed for situations where every second costs money and reputation, all workflows have been optimized for minimal effort and maximum constituent responsiveness.',
              },
              {
                title: 'Multi-channel Integration',
                body:
                  'Seamlessly integrate every channel of communication into sorted smart inboxes for easy management: website, CWC, scanned mail, facebook, twitter AND phone calls.',
              },
              {
                title: 'Smart tagging',
                body:
                  'Learn and track more about your constituents than ever before with an intelligent tagging system that keeps your data clean, useful and available dynamically.',
              },
              {
                title: 'Best in class security',
                body:
                  'Leveraging encryption and security standards trusted by over 120,000 companies, federal and state government agencies including as the FCC, the EPA, and the GSA.',
              },
              {
                title: 'Web & Mobile App',
                body:
                  'Manage cases and correspondence in the field with an award-winning downloadable mobile app that ensures you always have access to the functionality you need.',
              },
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
            <ShopifyLogo className='mr-8 mb-6' />
            <VenmoLogo className='mr-8 mb-6' />
            <SlackLogo className='mr-8 mb-6' />
            <OpenTableLogo className='mr-8 mb-6' />
            <UberLogo className='mr-8 mb-6' />
          </div>
        </div>
      </div>
    </div>
  )
}
