import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { ThemeContext } from "./Card";


{/* <Card.Icon color="#222222"><FaHeart /></Card.Icon> */}
//color="#F9FAFB", backgroundColor="#353535",
export default function CardIcon({children}){

    const {primaryColor, secondaryColor} = React.useContext(ThemeContext); 


    // Check whether its just one child? 
    // Have a default icon to display if none is passed

    // Default icon: 
    // <FaCircleInfo />

    return (
        <>
            <div className="iconContainer" style={{color: `${secondaryColor}`, backgroundColor: `${primaryColor}`}}>
                {children ? children : <FaCircleInfo />}
            </div>
        </>
    )
}