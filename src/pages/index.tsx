import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Layout from '../components/layout'

import OpenTableLogo from '../images/logo-opentable.svg'
import ShopifyLogo from '../images/logo-shopify.svg'
import SlackLogo from '../images/logo-slack.svg'
import UberLogo from '../images/logo-uber.svg'
import VenmoLogo from '../images/logo-venmo.svg'

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

      <div className='md:grid grid-cols-2'>
        <div style={{ maxWidth: 500, justifySelf: 'end' }}>
          <h2>Reduce your response time from weeks to hours</h2>
          <div>
            Over the past 15 years government officials have seen an explosion in volume of incoming requests. New digital channels, new expectations and a changing relationship
            with those they serve has made it difficult to keep pace. Indigov was built to alleviate this increasing burden and help our democracy scale better.
          </div>
        </div>

        <div>
          <div>AVERAGE RESPONSE TIME FOR A  MEMBER OF US CONGRESS TO A CONSTITUENT MESSAGE</div>
          <div>32-64 days</div>
          <div>Legacy systems</div>
          <div>8 hours</div>
          <div>Indigov</div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 24.64%, #FFFFFF 47.56%, #FFFFFF 79.64%, #F8F8F8 100%)' }}>
        <div className='md:grid grid-cols-2'>
          <div className='self-center' style={{ maxWidth: 500, justifySelf: 'end' }}>
            <h2>Never Miss a Message</h2>

            {(() => {
              const renderRow = ({ idx, title, body }: { idx: string; title: string; body: string }) => (
                <div>
                  <div className='flex'>
                    <div>{idx}</div>
                    <div>{title}</div>
                  </div>
                  <div>{body}</div>
                </div>
              )

              return (
                <div>
                  {renderRow({
                    idx: '01',
                    title: 'Web and mobile app',
                    body:
                      'Manage cases and correspondence in the field with an award-winning downloadable mobile app that ensures you always have access to the functionalty you need.',
                  })}
                  {renderRow({
                    idx: '02',
                    title: 'Smart automation',
                    body: '',
                  })}
                  {renderRow({
                    idx: '03',
                    title: 'Real time analytics',
                    body: '',
                  })}
                  {renderRow({
                    idx: '04',
                    title: 'Multi-channel integration',
                    body: '',
                  })}
                  {renderRow({
                    idx: '05',
                    title: 'Smart tagging',
                    body: '',
                  })}
                  {renderRow({
                    idx: '04',
                    title: 'Best in class security',
                    body: '',
                  })}
                </div>
              )
            })()}
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
    </Layout>
  )
}

export default IndexPage
