import React from "react";
import Props from "./Props";

const Media = (props) => {
    return(
        <div>
            <h2> Name: {props.name}</h2>
            <h4> Age: {props.age}</h4>
            <h4> Email: {props.email}</h4>
            <h4> Phone Number: {props.phone}</h4>
            <h4> Location: {props.location}</h4>
        </div>
    )
}
export default Media;