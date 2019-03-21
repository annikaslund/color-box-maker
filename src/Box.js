import React, { Component } from "react";
import "./Box.css";


class Box extends Component {
    render() {
        console.log("I made it to the render for Box!")
        const {height, width, bgColor } = this.props
        return <div style={ {height: `${height}px`, width: `${width}px`, backgroundColor: bgColor} }></div>
    }
}

export default Box;