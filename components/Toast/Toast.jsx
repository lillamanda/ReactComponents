import React from "react";
import "./Toast.css";

import { FaCircleCheck, FaTriangleExclamation, FaCircleInfo } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

import ToastTitle from "./ToastTitle.jsx";
import ToastText from "./ToastText.jsx";

function Toast({type = "information", children}){

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
        <div className="toast">
            <div className="icon">
                {getAppropriateIcon()}
            </div>
            {children}
        </div>
    )
}

Toast.Title = ToastTitle;
Toast.Text = ToastText;

export default Toast;
