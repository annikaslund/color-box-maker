import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import BoxList from "./BoxList";

it("renders without crashing", function(){
    mount(<BoxList />);
})

it("matches snapshot", function(){
    let wrapper = mount(<BoxList />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})