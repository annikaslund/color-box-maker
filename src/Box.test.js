import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Box from "./Box";

it("renders without crashing", function(){
    mount(<Box />);
});

it("matches snapshot", function(){
    let wrapper = mount(<Box/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})