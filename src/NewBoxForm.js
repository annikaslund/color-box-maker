import React, { Component } from "react";
import "./NewBoxForm.css";

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            width: 0,
            bgColor: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        console.log("WHAT IS THIS???", this)
        evt.preventDefault();
        this.props.getNewBoxInfo(this.state);
        this.setState({
            height: 0,
            width: 0,
            bgColor: ""
        });
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <form className="NewBoxForm" onSubmit={ this.handleSubmit }>
                <label htmlFor="height">Height:</label>
                <input name="height" value={ this.state.height } onChange={ this.handleChange }></input>
                
                <label htmlFor="width">Width:</label>
                <input name="width" value={ this.state.width } onChange={ this.handleChange }></input>

                <label htmlFor="bgColor">Background Color:</label>
                <input name="bgColor" value={ this.state.bgColor } onChange={ this.handleChange }></input>
                <button>Make Button!</button>
            </form>
        );
    }
}
export default NewBoxForm;