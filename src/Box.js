import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
    render() {
        return <div style={ this.props.attributes }></div>
    }
}

export default Box;