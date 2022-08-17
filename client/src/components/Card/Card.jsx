import React from "react";
//import { NavLink } from "react-router-dom";

export default function Card({ name, continent, image, id }) {
    return(
        <div>
            {/*Name: <NavLink to={`/countries/${id}`}>{name}</NavLink>*/}
            <div>Name: {name}</div>
            <div>Continent: {continent}</div>
            <div>Flag: </div>
            <img src={image} alt='image not found'/>
            <br/>
        </div>
    )
}