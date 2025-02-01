import React from "react";

export default function CardText({children}){
    return (
        <>
            <div className="textContainer">
                <p>{children}</p>
            </div>
        </>
    )
}