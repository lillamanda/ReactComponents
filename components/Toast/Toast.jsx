import React from "react";
import "./Toast.css";

import { FaCircleCheck, FaTriangleExclamation, FaCircleInfo } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

import ToastTitle from "./ToastTitle.jsx";
import ToastText from "./ToastText.jsx";

function Toast({type = "information", children}){

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
        <div className={`toast ${type}`}>
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
