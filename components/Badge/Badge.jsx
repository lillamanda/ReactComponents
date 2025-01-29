
import React from "react"; 
import "./Badge.css"

export default function Badge({children, color = "gray", shape = ""}){

    return (
        <span className={`badge ${color} ${shape}`}>{children}</span>
    )
}