import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import '../App.css'

function Studentlife() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <Layout>
      <h1 className='my-20'>
student
      </h1>
    </Layout>
  )
}

export default Studentlife