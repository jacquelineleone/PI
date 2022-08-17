import React from "react";

export default function Activity({ a }) {
    return(
        <div>
            <span>Activity: {a.name}</span>
            <br/>
            <span>Difficulty: {a.difficulty}</span>
            <span>Duration: {a.duration}</span>
            <span>Season: {a.season}</span>
        </div>
    )
}