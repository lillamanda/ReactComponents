import React from "react";
import BannerTitle from "./BannerTitle.jsx"
import BannerText from "./BannerText.jsx"


export default function BannerInfo({type, children}){

    function renderChildren(){
        function reactNodeIsOfType(node, type) {
            return typeof node === "object" && node !== null && node.type === type;
        }

        let titleComponent;
        let textComponent;
        let unknownText;

        React.Children.forEach(children, (child) => {
            if(reactNodeIsOfType(child, BannerTitle)){
                titleComponent = child;
            }
            if(reactNodeIsOfType(child, BannerText)){
                textComponent = child;
            }
            else{
                unknownText = child; 
            }
        });

        return (
            <div>
                {titleComponent ? titleComponent : getStandardTitle()}
                {textComponent ? textComponent : <BannerText>{unknownText}</BannerText>}
            </div>
        )

    }

    function getStandardTitle(){
        if (type === "success"){
            return (<BannerTitle>Success</BannerTitle>)
        }
        else if (type === "warning"){
            return (<BannerTitle>Attention</BannerTitle>)
        }
        else if (type === "error"){
            return (<BannerTitle>Error occurred</BannerTitle>)
        }
        else { // "neutral"
            return (<BannerTitle>Information</BannerTitle>)
        }
    }

    return (
        <>
            {renderChildren()}
        </>
    )
}