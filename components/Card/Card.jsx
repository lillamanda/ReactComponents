import React from "react"; 
import './Card.css'


    //   <Card style="hover">
    //     <Card.Icon><FaHeart /></Card.Icon>
    //     <Card.Title>Title of my Card</Card.Title>
    //     <Card.Text>This is my card text</Card.Text>
    //   </Card>

const ThemeContext = React.createContext();

export default function Card({children, style="", icon, primaryColor="#353535", secondaryColor="#F9FAFB"}){

    // Should the Card main component accept colors and then adjust the children to secure a coherent theme so the user doesnt have to? 
    // say primary color, secondary color. Primary color being background color of icon, and the "read more text"
    // Do I then alter specific elements, or do i create a CSS theme in this component that allows me to easily change colors accordingly? 


    // Go through children, figure out if an icon is being passed, if not get a generic one
    // Figure out if theres a title/text in what is passed. - do I want to make a separate function for figuring this out, since that is also used in my Banner? 
    // Is there a basic react function that already does that? 

    // All cards should be the same height for conformity, no matter how long the text. Make sure the text fades out towards the end - option to click to expand the card into a full page cover? 
    // Provide a Card.Link to send people to a post where they can read more, typical cards used for blog posts etc? 

    return (
        <ThemeContext.Provider value={{primaryColor, secondaryColor}}>
            <div className={`card ${style}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export {ThemeContext}