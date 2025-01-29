    //   <Banner type="warning">Extra text goes here</Banner>
import React from "react"; 
import "./Banner.css"


export default function Banner({children, type = "warning"}){

    return (
        <div className="bannercontainer">
            <div className={`banner ${type}`}>
                {children}
            </div>
        </div>
    )
}