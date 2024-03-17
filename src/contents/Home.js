import React , { Component } from 'react';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';
import { TypeAnimation } from 'react-type-animation';
import profilepic from '../img/pe.jpg';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'


class Home extends Component {
    render() {
        return(
            <div className='condiv home'>
                <img src={profilepic} alt="profile" className="profilepic" />
                {/* <p className="typingeffect">I'm a Web Deverloper</p> */}
                <h6>I'm Nattapong Panatiragul</h6>
                {/* <ReactTypingEffect text={"I'm Nattapong Panatiragul" } speed={80} eraseDelay={200}  className="typingeffect"/> */}
                
                <Social />
            </div>
        )
    }
}

export default Home