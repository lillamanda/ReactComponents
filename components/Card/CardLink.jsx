import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { ThemeContext } from "./Card";


export default function CardLink({link, children = "Read more here"}){

    const {primaryColor, secondaryColor} = React.useContext(ThemeContext); 

    return (
        <a className="cardLink" style={{color: primaryColor}} href={link} _target="blank">
            <span>{children}</span>
            <span className="linkIcon">
                <FaArrowRight />            
            </span>
        </a>
    )
}