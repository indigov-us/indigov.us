import React from 'react'

import Layout from '../components/layout'

const NotFoundPage = () => (
    <Layout>
        <div style={{textAlign:'center'}}>
            <h1 style={{fontSize: '1.5em', fontWeight: 'bold', margin: '10px 0 20px 0'}}>404 — NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
)

export default NotFoundPage
