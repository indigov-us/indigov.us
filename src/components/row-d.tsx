import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'

const { useState } = React

export default () => {
  const [carouselValue, setCarouselValue] = useState(0)

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

  const renderSlide = ({ quote, author }: { quote: string; author: string }, i) => (
    <div key={i}>
      <div className='mt-8 mb-5 tiempos-headline text-2xl lg:text-4xl leading-tight font-light'>&ldquo;{quote}&rdquo;</div>
      <div className='montserrat uppercase tracking-widest text-md'>{author}</div>
    </div>
  )

  const slides = [
    {
      quote: 'Indigov speeds up our mail process meaning that I have more time to think about writing meaningful responses.',
      author: 'US Congressional Staffer',
    },
    {
      quote: 'For the ﬁrst time I feel like I have full insight into our mail and casework systems - I get custom reports delivered to me daily!',
      author: 'Member of US Congress',
    },
    {
      quote: 'Indigov has changed our office completely. It’s freed up multiple members of my staff to concentrate on casework and outreach instead of sifting through mail.',
      author: 'Member of US Congress',
    },
    {
      quote: 'Starting to use Indigov was like going from dial up AOL to Gmail.',
      author: 'Legislative Correspondent',
    },
    {
      quote:
        'Since our staff has full remote access to all constituent messages, we’ve been able to operate no interruption during the COVID crisis. Many of our colleague offices have gone dark. It’s been a game changer.',
      author: 'Chief of Staff',
    },
    {
      quote: 'I cannot explain how terrible the old tools are. I was using the same tools when I was a staffer 20 years ago.',
      author: 'Member of US Congress',
    },
    {
      quote: 'For the first time I feel like I am on top of our mail program, not the other way around.',
      author: 'Legislative Correspondent',
    },
    {
      quote: 'In my first 45m using Indigov, I answered more mail than in the previous four weeks combined.',
      author: 'US House Staffer',
    },
    {
      quote: 'Thank you so much for building this. I never imagined someone would make a tool for this.',
      author: 'US House Staffer',
    },
  ]

  const onCarouselChange = (value) => setCarouselValue(value)

  return (
    <div className='md:grid grid-cols-3' style={{ background: 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)' }}>
      <div className='self-end hidden md:block pt-20'>
        <Img fluid={data.bennyboyImage.childImageSharp.fluid} style={{ maxWidth: 357 }} />
      </div>

      <div className='text-center self-center py-10 mx-6 col-span-2 lg:col-span-1'>
        <div className='montserrat uppercase tracking-widest text-xl'>What staffers are saying</div>

        <Carousel className='mb-10' plugins={['infinite']} value={carouselValue} onChange={onCarouselChange}>
          {slides.map(renderSlide)}
        </Carousel>

        <Dots value={carouselValue} number={slides.length} onChange={onCarouselChange} />
      </div>
    </div>
  )
}
