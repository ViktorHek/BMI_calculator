import React from "react";
import { shallow } from "enzyme";

import Message from "../components/Message";

describe("Message component", () => {
  const wrapper = shallow(<Message bmiMessage="Normal" bmiValue="24.93" />);

  it("renders with message prop", () => {
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.93"
    );
  });
});