
import React from "react"; 
import "./Badge.css"

export default function Badge({children, color = "gray", shape = ""}){

    return (
        <div className={`badge ${color} ${shape}`}>{children}</div>
    )
}