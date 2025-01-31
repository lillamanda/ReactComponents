import React from "react"; 
import './Card.css'


    //   <Card style="hover">
    //     <Card.Icon><FaHeart /></Card.Icon>
    //     <Card.Title>Title of my Card</Card.Title>
    //     <Card.Text>This is my card text</Card.Text>
    //   </Card>

export default function Card({children, style="", icon}){

    // Go through children, figure out if an icon is being passed, if not get a generic one
    // Figure out if theres a title/text in what is passed. - do I want to make a separate function for figuring this out, since that is also used in my Banner? 
    // Is there a basic react function that already does that? 

    // All cards should be the same height for conformity, no matter how long the text. Make sure the text fades out towards the end - option to click to expand the card into a full page cover? 
    // Provide a Card.Link to send people to a post where they can read more, typical cards used for blog posts etc? 

    return (
        <div className={`card ${style}`}>
            {children}
        </div>
    )
}