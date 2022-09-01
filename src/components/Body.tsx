import { Divider } from '@mui/material'
import React from 'react'
import About from './About'
import EntidadesHolder from './EntidadesHolder'
import Contact from './Contact'
import Donation from './Donation'

const Body = () =>
{
  return (
    <div>
      <About />
      <EntidadesHolder />
      <Contact />
      <Donation />
    </div>
  )
}

export default Body