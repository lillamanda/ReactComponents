import React, { Children } from "react"; 
import './Card.css'

import CardIcon from "./CardIcon.jsx";
import CardTitle from "./CardTitle.jsx";
import CardText from "./CardText.jsx";
import CardLink from "./CardLink.jsx";


    //   <Card style="hover">
    //     <Card.Icon><FaHeart /></Card.Icon>
    //     <Card.Title>Title of my Card</Card.Title>
    //     <Card.Text>This is my card text</Card.Text>
    //     <Card.Link link="">This is my cardLink</Card.Link>
    //   </Card>


    // Card should prob have CSS Grid, not CSS flexbox
    // Could add option to override height/width of the card
    // - option to click to expand the card into a full page cover? like a popup overlay thing? 


const ThemeContext = React.createContext();

function Card({children, style="", primaryColor="#353535", secondaryColor="#F9FAFB"}){

    function renderChildren(){

        // Initialize with standard values
        let icon = <CardIcon></CardIcon>;
        let title = <CardTitle></CardTitle>;
        let text = <CardText></CardText>;
        let link;
        
        function checkWhichComponent(child){
            console.log(child)
            console.log(child.type)
            if(child.type === CardIcon){
                icon = child;
                return true;
            }
            else if(child.type === CardTitle){
                title = React.cloneElement(child);
                return true;
            }
            else if(child.type === CardText){
                text = React.cloneElement(child);
                return true;
            }
            else if(child.type === CardLink){
                link = React.cloneElement(child);
                return true;
            }
            else{
                return false
            }
        }

        if(!children){
            console.log("Empty Card, no children passed")
        }
        else if(Array.isArray(children)){
            React.Children.forEach(children, child => checkWhichComponent(child));
        }
        else{
            if(!checkWhichComponent(children)){
                text=<CardText>{children}</CardText>;
            }
        }

        return [icon, title, text, link];
    }
    

    return (
        <ThemeContext.Provider value={{primaryColor, secondaryColor}}>
            <div className={`card ${style}`}>
                {/* {children} */}
                {renderChildren()}
            </div>
        </ThemeContext.Provider>
    )
}


Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Link = CardLink;

export default Card;

export {ThemeContext}