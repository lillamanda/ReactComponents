import React from 'react'
import './App.css'

import Badge from "../components/Badge/Badge.jsx"
import Banner from "../components/Banner/index.jsx"
import Card from "../components/Card/Card.jsx"
import Toast from "../components/Toast/Toast.jsx"
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
        <Card style="hover" secondaryColor={"pink"}>
          <Card.Icon><FaHeart /></Card.Icon>
          <Card.Title>Title of my Card</Card.Title>
          <Card.Text>This is my card text. The icon is being passed with a color for the icon</Card.Text>
        </Card>
        <Card style="hover" primaryColor={"purple"}>
          <Card.Icon><FaHeart /></Card.Icon>
          <Card.Title>Title of my Card</Card.Title>
          <Card.Text>This is my card text. the icon component is being passed a background color</Card.Text>
          <Card.Link link="https://google.com">Read more here</Card.Link>
        </Card>
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Title>Title of my Card</Card.Title>
          <Card.Text>This is my card text. this card is not sent a specific icon</Card.Text>
          <Card.Link link="https://google.com">Read more here</Card.Link>
        </Card>
        <Card>
          This is a card with no card components inside, just plain text
        </Card>
        <Card>
          <Card.Title>This is a card without icon or text, only Card.Title</Card.Title>
        </Card>
        <Card>
          <Card.Text>This is a card with only Card.Text</Card.Text>
        </Card>
        <Card>
          <Card.Icon></Card.Icon>
        </Card>
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Title>This is my title</Card.Title>
          This is just random plain text without card.text surrounding it
        </Card>
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Title>This is my title of a longer card</Card.Title>
          <Card.Text>This is a long text for the card, should the card be limited in how long it gets, and cut off text that gets too long? I think so. 
            Maybe it should also detect whether we have used enter to separate lines/paragraphs, and make those into separate paragraphs.
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
            <Card.Link link="https://google.com">Read more here</Card.Link>
        </Card>
        <Card>
          <Card.Link link="https://google.com">Read more here</Card.Link>
        </Card>
        <Card>

        </Card>
      </div>

      <div>
        <Toast type="warning">
          <Toast.Title>This is the title of my Toast</Toast.Title>
          <Toast.Text>This is the text of my Toast</Toast.Text>
        </Toast>
      </div>

    </>
  )
}

export default App
