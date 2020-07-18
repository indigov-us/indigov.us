import React from 'react'

// @ts-ignore
import Clock from '../images/clock.svg'

export default () => {
  return (
    <div className='md:grid md:grid-cols-2 py-12'>
      <div style={{ maxWidth: 500, justifySelf: 'end' }}>
        <h2 className='tiempos-headline text-4xl leading-tight mb-6'>Reduce your response time from weeks to hours</h2>
        <div className='text-lg'>
          Over the past 15 years government officials have seen an explosion in volume of incoming requests. New digital channels, new expectations and a changing relationship with
          those they serve has made it difficult to keep pace. Indigov was built to alleviate this increasing burden and help our democracy scale better.
        </div>
      </div>

      <div>
        <hr />
        <div className='flex my-4 items-center'>
          <div className='montserrat uppercase font-medium tracking-wider leading-snug mr-6' style={{ color: '#6D7278', maxWidth: 300 }}>
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
  )
}
