import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Accordion from '../components/accordion'
import Layout from '../components/layout'
// @ts-ignore
import Clock from '../images/clock.svg'

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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      marbleImage: file(relativePath: { eq: "marble.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      devicesImage: file(relativePath: { eq: "devices.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      exampleWebsiteImage: file(relativePath: { eq: "example-website.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

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
    <Layout>
      <div className='flex items-center justify-center relative overflow-hidden' style={{ height: 790 }}>
        <div className='absolute w-full h-full'>
          <Img className='h-full' fluid={data.marbleImage.childImageSharp.fluid} />
        </div>

        <div className='relative text-white text-center' style={{ maxWidth: 716 }}>
          <h2 className='montserrat text-4xl font-bold leading-tight mb-12'>A next generation constituent experience management platform designed for government</h2>
          <div>
            <button className='montserrat py-3 px-6 tracking-widest font-bold uppercase text-governor-bay text-sm' style={{ backgroundColor: '#E0E0E0' }}>
              Request a demo
            </button>
          </div>
        </div>
      </div>

      <div className='md:grid grid-cols-2 py-12'>
        <div style={{ maxWidth: 500, justifySelf: 'end' }}>
          <h2 className='tiempos-headline text-4xl leading-tight mb-6'>Reduce your response time from weeks to hours</h2>
          <div className='text-lg'>
            Over the past 15 years government officials have seen an explosion in volume of incoming requests. New digital channels, new expectations and a changing relationship
            with those they serve has made it difficult to keep pace. Indigov was built to alleviate this increasing burden and help our democracy scale better.
          </div>
        </div>

        <div>
          <hr />
          <div className='flex my-4 items-center'>
            <div className='montserrat uppercase font-medium tracking-wider leading-snug mr-6' style={{ color: '#6D7278', width: 300 }}>
              AVERAGE RESPONSE TIME FOR A MEMBER OF US CONGRESS TO A CONSTITUENT MESSAGE
            </div>
            <div>
              <Clock />
            </div>
          </div>
          <div className='mb-4'>
            <div className='tiempos-headline text-5xl text-portage'>32-64 days</div>
            <div className='montserrat uppercase tracking-widest text-sm'>Legacy systems</div>
          </div>
          <div className='tiempos-headline text-5xl text-governor-bay'>8 hours</div>
          <div className='montserrat uppercase tracking-widest text-sm'>Indigov</div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 24.64%, #FFFFFF 47.56%, #FFFFFF 79.64%, #F8F8F8 100%)' }}>
        <div className='md:grid grid-cols-2'>
          <div className='self-center' style={{ maxWidth: 500, justifySelf: 'end' }}>
            <h2>Never Miss a Message</h2>
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

        <div className='container flex md:justify-center'>
          <div>
            <div>Powered by software that powers</div>
            <div className='flex flex-col md:flex-row md:items-center'>
              <ShopifyLogo />
              <VenmoLogo />
              <SlackLogo />
              <OpenTableLogo />
              <UberLogo />
            </div>
          </div>
        </div>
      </div>

      <div className='md:grid grid-cols-2'>
        <div>
          <Img fluid={data.exampleWebsiteImage.childImageSharp.fluid} />
        </div>
        <div className='self-center' style={{ maxWidth: 500 }}>
          <h2>Not just a website</h2>
          <Accordion
            items={[
              {
                title: 'Constituent first',
                body:
                  'Manage cases and correspondence in the field with an award-winning downloadable mobile app that ensures you always have access to the functionalty you need.',
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

      <div className='md:grid grid-cols-3' style={{ background: 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)' }}>
        <div>
          <Img fluid={data.bennyboyImage.childImageSharp.fluid} />
        </div>

        <div className='text-center self-center'>
          <div>What staffers are saying</div>
          <div>“For the ﬁrst time I feel like I have full insight into our mail and casework systems - I get custom reports delivered to me daily!”</div>
          <div>Name title</div>
        </div>

        <div>&nbsp;</div>
      </div>
    </Layout>
  )
}

export default IndexPage
