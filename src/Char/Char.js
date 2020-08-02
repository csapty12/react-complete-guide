import React from "react";
import "./char.css";

export default ({click, value}) => {
    return (
        <div className={"char"} onClick={click}>{value}</div>
    )
}