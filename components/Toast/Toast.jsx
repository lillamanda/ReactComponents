import React from "react";
import "./Toast.css";

import { FaCircleCheck, FaTriangleExclamation, FaCircleInfo } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

import ToastTitle from "./ToastTitle.jsx";
import ToastText from "./ToastText.jsx";

function Toast({type = "information", children}){

    // Create a function that will make it show for x seconds or until it is closed. setTimeOut(). 
    // add class toastShow to element
    // do I need a function?  the toast should only live for a short duration when it is called
    

    const [show, setShow] = React.useState(true);

    // setTimeout(setShow( (prevVal) => !prevVal ), 3000);
    
    function showToast(){
        setShow( (prevVal) => !prevVal )
        
        // After 3 seconds, remove the show class from DIV
        setTimeout(setShow( (prevVal) => !prevVal ), 3000);
    }

    // Create CSS styles to put it on top of the page in the bottom right corner, z-index.


    // These icons will get their CSS from Banner.css bc they're using the same setup and classnames.
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
        <div className={`toast ${ show ? "toastShow" : "" } ${type}`}>
            <div className="icon">
                {getAppropriateIcon()}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

Toast.Title = ToastTitle;
Toast.Text = ToastText;

export default Toast;
