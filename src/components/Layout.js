import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout