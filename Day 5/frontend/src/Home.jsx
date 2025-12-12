import React from 'react'
import IndividualIntervalsExample from './bootstrapcomponents/IndividualIntervalsExample'
import GridExample from './bootstrapcomponents/GridExample'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      <h1>Hello i am home component</h1>
      <IndividualIntervalsExample/>
      <GridExample/>
    </div>
  )
}

export default Home
