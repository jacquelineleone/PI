import React from "react";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
    return(
        <div>
            <NavLink to={'/home'}>
                <button>Go to home</button>
            </NavLink>
        </div>
    )
}