import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function Facilities() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
                <h1 className='my-20'>Facilities</h1>

    </Layout>
  )
}

export default Facilities