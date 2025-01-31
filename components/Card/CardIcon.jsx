import React from "react";
import { FaCircleInfo } from "react-icons/fa6";


{/* <Card.Icon color="#222222"><FaHeart /></Card.Icon> */}

export default function CardIcon({color="#F9FAFB", backgroundColor="#353535", children}){

    // Check whether its just one child? 
    // Have a default icon to display if none is passed

    // Default icon: 
    // <FaCircleInfo />

    return (
        <>
            <div className="iconContainer" style={{color: `${color}`, backgroundColor: `${backgroundColor}`}}>
                {children ? children : <FaCircleInfo />}
            </div>
        </>
    )
}