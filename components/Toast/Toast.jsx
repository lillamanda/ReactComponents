import React from "react";
import "./Toast.css";

import { FaCircleCheck, FaTriangleExclamation, FaCircleInfo } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

import ToastTitle from "./ToastTitle.jsx";
import ToastText from "./ToastText.jsx";

function Toast({type = "information", children}){

    // clean up CSS-classes for the toast
    // somethings wrong with the animation of it when it disappears, after i refactored the code

    const [show, setShow] = React.useState(true);
     
    React.useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 3000)
    
        return () => {
        clearTimeout(timeId)
        }
    }, []);
      

    // Add stacking if multiple toasts

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

    // This makes sure the component disappears once the time passed for it to no longer show
    // Should maybe have a hover-effect that if someone is mouse-overing the toast, it should stay till it no longer is mouseover ? 
    if (!show) {
        return null;
    }
                
    return (
        // <div className={`toast ${ show ? "toastShow" : "" } ${type}`}>
        <div className={`toast toastShow ${type}`}>

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
