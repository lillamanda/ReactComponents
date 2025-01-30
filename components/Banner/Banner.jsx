    //   <Banner type="warning">Extra text goes here</Banner>
import React from "react"; 
import "./Banner.css"
import { FaCircleCheck, FaTriangleExclamation, FaCircleInfo } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import BannerInfo from "./BannerInfo"

// import BannerTitle from "./BannerTitle"

export default function Banner({children, type = "warning"}){


    function getAppropriateIcon(){
        if (type === "success"){
            return (<FaCircleCheck />)
        }
        else if (type === "warning"){
            return (<FaTriangleExclamation />)
        }
        else if (type === "error"){
            return (<FaTimesCircle />)
        }
        else { // "neutral"
            return (<FaCircleInfo />)
        }
    }

    return (
        <div className="bannercontainer">
            <div className={`banner ${type}`}>
                <div className="icon">
                    {getAppropriateIcon()}
                </div>
                
                <BannerInfo type={type}>
                    {children}
                </BannerInfo>
                
            </div>
        </div>
    )
}


    // Can move all logic for the info in this component, instead of having its own BannerInfo component (needs adjusting if so, to render plain text children into p etc)


    // function checkChildrenForTitle(){
    //     function reactNodeIsOfType(node, type) {
    //         return typeof node === "object" && node !== null && node.type === type;
    //     }

    //     let hasTitle = false;

    //     React.Children.forEach(children, (child) => {
    //         if(reactNodeIsOfType(child, BannerTitle)){
    //             hasTitle = true;
    //         }
    //     })

    //     return (hasTitle)
    // }

    // function getStandardTitle(){
    //     if (type === "success"){
    //         return (<BannerTitle>Success</BannerTitle>)
    //     }
    //     else if (type === "warning"){
    //         return (<BannerTitle>Attention</BannerTitle>)
    //     }
    //     else if (type === "error"){
    //         return (<BannerTitle>Error occurred</BannerTitle>)
    //     }
    //     else { // "neutral"
    //         return (<BannerTitle>Information</BannerTitle>)
    //     }
    // }
