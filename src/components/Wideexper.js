import React, { Component } from "react";

class Wideexper extends Component{
    render() {
        return(
            <div className="wideexper">
                <div className="wide-ex">
                    <h3>{this.props.title} - {this.props.project}</h3>
                    {/* <h4 className="secondtext">Responsibilities: </h4> */}
                    <h4>{this.props.job}</h4>
                </div>
            </div>

        );
    }
}
export default Wideexper;