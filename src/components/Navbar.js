import React , { Component } from 'react';
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active')
        }
        this.setState({'NavItemActive':item},() => {
            document.getElementById(this.state.NavItemActive).classList.add('active')
        })
    }

    render() {
        return (
            <nav>
                <ul className="horizontal-menu">
                    <Navitems item="Home" tolink="/nattapong-resume/" activenav={this.activeitem}></Navitems>
                    <Navitems item="About" tolink="/nattapong-resume/about" activenav={this.activeitem}></Navitems>
                    <Navitems item="Education" tolink="/nattapong-resume/education" activenav={this.activeitem}></Navitems>
                    <Navitems item="Experience" tolink="/nattapong-resume/experience" activenav={this.activeitem}></Navitems>
                    <Navitems item="Contact" tolink="/nattapong-resume/contact" activenav={this.activeitem}></Navitems>
                </ul>
            </nav>
        )
    }
}
export default Navbar;