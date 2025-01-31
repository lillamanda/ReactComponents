import React from 'react'
import './App.css'

import Badge from "../components/Badge/Badge.jsx"
import Banner from "../components/Banner/index.jsx"
import Card from "../components/Card/index.jsx"
import { FaHeart } from "react-icons/fa6";

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


      <Banner type="warning">
        <Banner.Title>There is a problem</Banner.Title>
        <Banner.Text>Extra text goes here</Banner.Text>
      </Banner>
      <Banner type="error">Extra text goes here</Banner>
      <Banner type="neutral">
        <Banner.Text>Extra text goes here</Banner.Text>
      </Banner>
      <Banner type="success">Extra text goes here</Banner>
      <Banner type="warning"/>

      <div className='cardContainer'>
        <Card style="hover">
          <Card.Icon color="red"><FaHeart /></Card.Icon>
          <Card.Title>Title of my Card</Card.Title>
          <Card.Text>This is my card text</Card.Text>
        </Card>
        <Card style="hover">
          <Card.Icon backgroundColor="purple"><FaHeart /></Card.Icon>
          <Card.Title>Title of my Card</Card.Title>
          <Card.Text>This is my card text</Card.Text>
        </Card>
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Title>Title of my Card</Card.Title>
          <Card.Text>This is my card text</Card.Text>
        </Card>
      </div>

    </>
  )
}

export default App
