import React from "react";
import renderer from "react-test-renderer"; 
import CardPoints from "../../src/Components/Card";

describe("<CardPoints />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(<CardPoints points="10000" />);
  });
  it("Should render correctly", () => {
    expect(wrapper).toBeDefined();
  });
});
