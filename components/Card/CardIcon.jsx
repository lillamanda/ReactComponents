import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { ThemeContext } from "./Card";


export default function CardIcon({children = <FaCircleInfo />}){

    const {primaryColor, secondaryColor} = React.useContext(ThemeContext); 

    return (
        <>
            <div className="iconContainer" style={{color: `${secondaryColor}`, backgroundColor: `${primaryColor}`}}>
                {children}
            </div>
        </>
    )
}