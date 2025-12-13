import React from 'react'
import IndividualIntervalsExample from './bootstrapcomponents/IndividualIntervalsExample'
import GridExample from './bootstrapcomponents/GridExample'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      <h1>Welcome to College Mangement</h1>
      <IndividualIntervalsExample/>
      <h2 id="dept">Department :</h2>
      <GridExample/>
    </div>
  )
}

export default Home
