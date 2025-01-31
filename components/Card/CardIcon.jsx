import React from "react";

export default function CardIcon({children}){

    // Check whether its just one child? 

    return (
        <>
            <div className="iconContainer">
                {children}
            </div>
        </>
    )
}