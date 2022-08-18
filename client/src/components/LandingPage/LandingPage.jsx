import React from "react";
import { NavLink } from "react-router-dom";
import { 
    Video, 
    Mask,
    Name,
    Name2,
    Container,
    ButtonHome
} from "./LandingPage";
import archivo from "./isla.mp4";
import mascara from "./mask.jpg"

export default function LandingPage() {
    return(
        <div>
            <Video src={archivo} autoPlay loop muted></Video>
            <Mask src={mascara}></Mask>
            <Container>
                <Name>time to</Name>
            </Container>
            <Container>
                <Name2>TRAVEL</Name2>
            </Container>
            <Container>
                <NavLink to={'/home'}><ButtonHome>Home</ButtonHome></NavLink>
            </Container>

        </div>
    )
}