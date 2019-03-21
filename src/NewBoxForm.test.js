import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import BoxList from "./BoxList";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function(){
    mount(<NewBoxForm />);
})

it("matches snapshot", function(){
    let wrapper = mount(<NewBoxForm />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})