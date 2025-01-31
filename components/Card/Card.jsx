import React from "react"; 

    //   <Card style="hover">
    //     <Card.Icon><FaHeart /></Card.Icon>
    //     <Card.Title>Title of my Card</Card.Title>
    //     <Card.Text>This is my card text</Card.Text>
    //   </Card>

export default function Card({children, style="", icon}){
    return (
        <div className={`card ${style}`}>
            {children}
        </div>
    )
}