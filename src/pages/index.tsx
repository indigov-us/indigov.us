import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import RowA from '../components/row-a'
import RowB from '../components/row-b'
import RowC from '../components/row-c'
import RowD from '../components/row-d'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <RowA />
      <RowB />
      <RowC />
      <RowD />
    </Layout>
  )
}

export default IndexPage
