import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Layout from '../components/layout'
import MarbleImage from '../components/marble-image'

// @ts-ignore
import Logo from '../images/logo.svg'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      abeImage: file(relativePath: { eq: "babe-lincoln.png" }) {
        childImageSharp {
          fluid(maxWidth: 812) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className='ig-about'>
        <div className='relative flex items-center justify-center' style={{ height: 320 }}>
          <MarbleImage />

          <div className='relative text-white text-center mx-4' style={{ maxWidth: 716 }}>
            <h2 className='montserrat text-2xl md:text-4xl font-bold leading-tight' style={{ color: '#e0e0e0' }}>
              Who we are
            </h2>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 24.64%, #FFFFFF 47.56%, #FFFFFF 79.64%, #F8F8F8 100%)' }}>
          <div className='mx-auto py-16 px-8' style={{ maxWidth: 584 }}>
            <Logo />
            <div className='my-4'>
              <span className='pr-6'>in·di·gov</span>
              <span>/ˈindəˌguhv/</span>
            </div>
            <div className='my-2 italic' style={{ color: '#919191' }}>
              noun
            </div>
            <div className='text-2xl'>1. An ineffable fusion of red and blue working together towards a better government for us all.</div>
          </div>
        </div>

        <div className='mx-auto px-8 my-16' style={{ maxWidth: 584 }}>
          <div className='tiempos-headline text-4xl leading-tight mb-10'>Our Rallying Cry</div>

          <div className='text-xl leading-loose'>
            Right now, all around the world democracy is in retreat. Autocratic governments are investing heavily in tech to{' '}
            <span className='text-persian-red font-bold'>control</span>, <span className='text-persian-red font-bold'>subvert</span> and{' '}
            <span className='text-persian-red font-bold'>oppress</span>. If democracy does not make commensurate investments in tech to{' '}
            <span className='text-havelock-blue font-bold'>listen</span>, <span className='text-havelock-blue font-bold'>understand</span> and{' '}
            <span className='text-havelock-blue font-bold'>serve</span>, we are going to have dystopian outcomes. To that end we are defining a new category of software…
          </div>

          <div className='border-solid border-l-2 pl-10 my-12 uppercase montserrat font-medium text-xl pr-10 tracking-widest'>
            An operating system for representative democracy.
          </div>

          <div className='text-xl leading-loose' style={{ color: '#575757' }}>
            <div className='my-10'>
              There are <b>570k elected officials in the US that receive over 5.1b constituent messages per year</b>…the core of the democratic user experience in America. The vast
              majority of reps and staffers use self-hosted antiquated legacy tools built decades ago or simple email to manage it all. As a result the average constituent response
              time for elected representatives nationally is 45 days. Not only is this tragic for our system of government but trust and votes are won or lost in every constituent
              interaction. We can do better.
            </div>
            <div className='my-10'>
              Indigov has built a modern constituent service platform for government that has already <b>reduced average response time from months to a matter of minutes/hours</b>{' '}
              and given representatives unprecedented capabilities and data insights that are changing the way they do their jobs and structure their teams.
            </div>
            <div className='my-10'>
              This is not a business, it is a rallying cry, a deeper purpose to strive to understand our government and make it more efficient through the application of purpose
              built technology.
            </div>
          </div>

          <hr className='my-8' style={{ borderColor: '#979797', width: 164 }} />
          <Logo />
        </div>

        <div className='relative py-10' style={{ background: 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)' }}>
          <div className='ig-abe absolute bottom-0 hidden md:block'>
            <Img fluid={data.abeImage.childImageSharp.fluid} style={{ maxWidth: 406 }} />
          </div>

          <div className='text-center relative mx-auto px-6' style={{ maxWidth: 619 }}>
            <div className='montserrat uppercase my-8 text-lg tracking-widest'>Want to join us? We're hiring!</div>
            <div className='text-lg leading-loose my-8' style={{ color: '#575757' }}>
              We’re looking for mission driven talented folks to join us in building one of the highest quality, highest output teams in the world. Think you may be a good fit?
              Click the link below to view open positions and apply.
            </div>
            <a
              href='https://angel.co/company/indigov-1/jobs'
              target='_blank'
              className='inline-block border-governor-bay border-solid border rounded-full text-sm px-12 py-6 mb-6 montserrat font-bold tracking-widest text-governor-bay uppercase'
              style={{ boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.123798)' }}
            >
              View open positions
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
