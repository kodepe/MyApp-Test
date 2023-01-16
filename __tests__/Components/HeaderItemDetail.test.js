import React from "react";
import renderer from "react-test-renderer";
import HeaderItemDetail from "../../src/Components/HeaderItemDetail";

describe("<HeaderItemDetail />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(<HeaderItemDetail title="Iphone 14 Pro Max" />);
  });
  it("Should render correctly", () => {
    expect(wrapper).toBeDefined();
  });
});
