import React from "react";
export default ({paragraphLength}) =>{
    const isShort = paragraphLength < 5;
    const text = isShort?"Text too short!": "Text long enough";
    return (
        <div>
            <p>paragraph length: {paragraphLength}</p>
            <p>{text}</p>
        </div>
    )
}