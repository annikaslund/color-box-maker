import React, { Component } from "react";
import uuid from "uuid/v4";
import "./BoxList.css";
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.createNewBox = this.createNewBox.bind(this);
    }

    createNewBox(box) {
        let newBox = { ...box, id: uuid() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }));
    }

    render() {
        const boxes = this.state.boxes.map(b => (
            <Box key={b.id} height={b.height} width={b.width} bgColor={b.bgColor} />
        ))

        return (
            <div>
                <NewBoxForm getNewBoxInfo={this.createNewBox} />
                {boxes}
            </div>
        )
    }
}

export default BoxList;