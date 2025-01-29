import React from 'react'
import './App.css'

import Badge from "../components/Badge/Badge.jsx"
import Banner from "../components/Banner/Banner.jsx"


function App() {

  return (
    <>
      <Badge color="red" shape="pill">FirstBadge</Badge>
      <Badge color="gray" shape="square">FirstBadge</Badge>
      <Badge color="indigo" shape="pill">FirstBadge</Badge>
      <Badge color="pink" shape="pill">FirstBadge</Badge>
      <Badge color="purple">FirstBadge</Badge>
      <Badge color="yellow" shape="pill">FirstBadge</Badge>
      <Badge color="green" shape="pill">FirstBadge</Badge>
      <Badge color="blue" shape="pill">FirstBadge</Badge>
      <Badge>FirstBadge</Badge>


      <Banner type="warning">Extra text goes here</Banner>
      <Banner type="error">Extra text goes here</Banner>
      <Banner type="neutral">Extra text goes here</Banner>
      <Banner type="success">Extra text goes here</Banner>
    </>
  )
}

export default App
