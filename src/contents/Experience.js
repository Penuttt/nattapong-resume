import React, { Component } from "react";
import Wideexper from "../components/Wideexper";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1Open: false,
            dropdown2Open: false,
            additionalInfoOpen: false
        };
    }

    toggleDropdown1 = () => {
        this.setState((prevState) => ({
            dropdown1Open: !prevState.dropdown1Open
        }));
    };

    toggleDropdown2 = () => {
        this.setState((prevState) => ({
            dropdown2Open: !prevState.dropdown2Open
        }));
    };

    toggleDropdown3 = () => {
        this.setState((prevState) => ({
            dropdown3Open: !prevState.dropdown3Open
        }));
    };

    toggleDropdown4 = () => {
        this.setState((prevState) => ({
            dropdown4Open: !prevState.dropdown4Open
        }));
    };

    toggleDropdown5 = () => {
        this.setState((prevState) => ({
            dropdown5Open: !prevState.dropdown5Open
        }));
    };

    toggleDropdown6 = () => {
        this.setState((prevState) => ({
            dropdown6Open: !prevState.dropdown6Open
        }));
    };

    toggleDropdown7 = () => {
        this.setState((prevState) => ({
            dropdown7Open: !prevState.dropdown7Open
        }));
    };

    toggleDropdown8 = () => {
        this.setState((prevState) => ({
            dropdown8Open: !prevState.dropdown8Open
        }));
    };

    toggleDropdown9 = () => {
        this.setState((prevState) => ({
            dropdown9Open: !prevState.dropdown9Open
        }));
    };

    toggleDropdown10 = () => {
        this.setState((prevState) => ({
            dropdown10Open: !prevState.dropdown10Open
        }));
    };

    toggleDropdown11 = () => {
        this.setState((prevState) => ({
            dropdown11Open: !prevState.dropdown11Open
        }));
    };

    toggleDropdown12 = () => {
        this.setState((prevState) => ({
            dropdown12Open: !prevState.dropdown12Open
        }));
    };

    toggleAdditionalInfo = () => {
        this.setState((prevState) => ({
            additionalInfoOpen: !prevState.additionalInfoOpen
        }));
    };

    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Experience</h1>

                {/* Dropdown 1 */}
                <div className="dropdown1" onClick={this.toggleDropdown1}>
                    <Wideexper
                        title="2023"
                        project="Electric motorcycle battery charging station(Internship)"
                    />
                </div>
                {this.state.dropdown1Open && (
                    <div className="dropdown11">
                        <p className="secontext"><b>Detail:</b>  Battery swapping station for electric motorcycles.</p>
                        <p className="secontext"><b>Responsibilities:</b></p>
                        <ul>
                            <li className="secontext">• Lead the electronic team in designing and calculating electrical system.</li>
                            <li className="secontext">• Write communication of devices using can-bus protocol.</li>
                            <li className="secontext">• Designing a battery swapping system, database  and developing an application for swapping with flutter.</li>
                        </ul>
                    </div>
                )}


                {/* Dropdown 2 */}
                <div className="dropdown2" onClick={this.toggleDropdown2}>
                    <Wideexper
                        title="2022"
                        project="RoverC: HRI Project"
                    />
                    </div>
                    {this.state.dropdown2Open && (
                        <div className="dropdown22">
                            <p className="secontext"><b>Detail:</b>  Programming the movement of a robot that uses a mecanum wheel and can control its movement over long distances for exploration purposes.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Program the robot's movement using the Macanum wheel equation and Bluetooth connection. </li>
                                <li className="secontext">• Create an application to control the robot's movement.</li>
                            </ul>
                        </div>
                    )}

                {/* Dropdown 3 */}
                <div className="dropdown3" onClick={this.toggleDropdown3}>
                    <Wideexper
                        title="2022"
                        project="Energy drink gripper: Robot Gripper Project"
                    />
                    {this.state.dropdown3Open && (
                        <div className="dropdown33">
                            <p className="secontext"><b>Detail:</b>  Gripper design for picking up energy drink bottles that do not catch on the label area. And most importantly, it must be controlled with an electrical system that is easy to use.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Lead the electronic team in designing and calculating an easy-to-use electrical system to control the operation of the gripper. </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown 4 */}
                <div className="dropdown4" onClick={this.toggleDropdown4}>
                    <Wideexper
                        title="2022"
                        project="Viscosity Tester: Class Project"
                    />
                    {this.state.dropdown4Open && (
                        <div className="dropdown44">
                            <p className="secontext"><b>Detail:</b>  Raising standards for food viscosity measurement to improve the lives of bedridden patients with dysphagia.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Lead the electronic team in designing and calculating the electrical system of the machine and define a sensor to measure the value of the current from the motor's torque to determine the viscosity.</li>
                                <li className="secontext">• Prepare an electrical control cabinet for the viscosity tester.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown 5 */}
                <div className="dropdown5" onClick={this.toggleDropdown5}>
                    <Wideexper
                        title="2022"
                        project=" 1  Degree of Freedom Robot: Class Project"
                    />
                    {this.state.dropdown5Open && (
                        <div className="dropdown55">
                            <p className="secontext"><b>Detail:</b>     Designing a institutrail Robot 1 DOF revolute joint with a 50 cm arm that can shoot laser into holes with less than 5 mm tolerance.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Design the robot's electrical system and operate the laser sensor via microcontroller control.</li>
                                <li className="secontext">• Prepare a control cabinet for the robot's electrical system.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown 6 */}
                <div className="dropdown6" onClick={this.toggleDropdown6}>
                    <Wideexper
                        title="2022"
                        project=" Farm inspection and storage system: Class Project" />
                    {this.state.dropdown6Open && (
                        <div className="dropdown66">
                            <p className="secontext"><b>Detail:</b>  Developing systems within the farm to be efficient by collecting data for future analysis.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Design  and calculate electrical systems to be able to be used in areas that are prone to moisture on the farm.</li>
                                <li className="secontext">• Prepare an electrical control cabinet for the monitoring system on the farm.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown 7 */}
                <div className="dropdown7" onClick={this.toggleDropdown7}>
                    <Wideexper
                        title="2021"
                        project="Squash Ball Launcher: Class Project" />
                    {this.state.dropdown7Open && (
                        <div className="dropdown77">
                            <p className="secontext"><b>Detail:</b>  Built a launcher that can aid in agricultural entrepreneurs' problem solving.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Mechanical design, as well as selecting parts and assembling the robot.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown 8 */}
                <div className="dropdown8" onClick={this.toggleDropdown8}>
                    <Wideexper
                        title="2021"
                        project=" NUAD: Class Project" />
                    {this.state.dropdown8Open && (
                        <div className="dropdown88">
                            <p className="secontext"><b>Detail:</b>  An adjustable automatic massage pillow that is portable and works with all body types.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• DC Motor modeling for relieving office syndrome.</li>
                                <li className="secontext">• Lead the team in meeting and developing.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown 9 */}
                <div className="dropdown9" onClick={this.toggleDropdown9}>
                    <Wideexper
                        title="2021"
                        project=" Smart Face Mask: Class Project" />
                    {this.state.dropdown9Open && (
                        <div className="dropdown99">
                            <p className="secontext"><b>Detail:</b>    Designing the mask focuses on communication and breathing problems.</p>
                            <p className="secontext"><b>Responsibilities:</b></p>
                            <ul>
                                <li className="secontext">• Research and analyze technologies that can be applied to masks to reduce communication and breathing problems.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Additional Info */}
                <div className="additional-info" onClick={this.toggleAdditionalInfo}>
                    <Wideexper
                        title="Additional information"
                        project="Part-time Jobs"
                    />
                    {this.state.additionalInfoOpen && (
                        <div className="additional-info-details">
                            <div className="additional">
                                <p className="secontext"><b>Detail:</b>  Take on the role of being an assistant in teaching.</p>
                                <ul>
                                    <li className="secontext">• Assisting teachers in teaching robots using the fundamentals of physics, programming and mechanics for high school student.</li>
                                    <li className="secontext">• Designer and supervisor of competitions in the course Robotics Explorations</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Experience;
