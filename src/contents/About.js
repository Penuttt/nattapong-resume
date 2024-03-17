import React, { Component } from "react";
import profilepic from '../img/pe.jpg';
import arrow from '../img/Asset 841.svg';
import { CSSTransition } from 'react-transition-group';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <div className="Condiv about">
                    <h1 className="subtopic">About me</h1>
                    <div className="about-content"></div>
                    <div className="image-container">
                        <img src={profilepic} className="profilepic" alt="Profile Picture" />
                        <img src={arrow} className="arrow" alt="Arrow" />
                        <text className="Pe">Pe</text>
                    </div>
                    <h3>Hi I'm Nattapong</h3>
                    <p> I am a fourth-year student from The Institute of Field Robotics(FIBO), King Mongkut's University of Technology Thonburi. Currently, I am interested in career paths related to Software Development, Software QA, Database Administration, or fields such as Mechanical/Electrical Design.</p>
                </div>
                <div className="condiv">
                    <h1 className="subtopic">Technical Skills</h1>
                    <ul>
                        <li className="secontext">• Computer-Aided Design with SOLIDWORKS</li>
                        <li className="secontext">• Structural and Electrical Calculations</li>
                        <li className="secontext">• Intermediate Programming with C/Python/HTML/JS Languages  </li>
                        <li className="secontext">• Speaking and Listening English moderately
                        </li>
                    </ul>
                </div>
            </div>



        );
    }
}

export default About;