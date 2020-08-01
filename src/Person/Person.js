import React from "react";

export default (props) => {
    return (<>
        <h2 onClick={props.click}>
            I am {props.name} and I am {props.age} years old
        </h2>
        <p>
            {props.children}
        </p>
        <input type={"text"} onChange={props.changed} value={props.name}/>
    </>)
}