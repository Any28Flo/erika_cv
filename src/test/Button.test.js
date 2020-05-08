import React from "react";
import {render} from "@testing-library/react";
import Button from "../components/Button";

test('<Button/>' , () =>{
    const wrapper = render(Button);
    wrapper.debug();
    expect(wrapper.getByText('0').tagName);
});
