import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component{
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Institute of Field Robotics (FIBO)" where="The King Mongkut's University of Technology Thonburi" from="2020" to="2024" Gpax="3.29"/>
                <Widecard title="Math-Science" where="Sukhondheerawidh High School" from="2014" to="2019" Gpax="3.81"/>

                
            </div>

        );
    }
}
export default Education;