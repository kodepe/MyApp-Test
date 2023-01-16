import React from "react";
import renderer from "react-test-renderer";
import Movement from "../../src/Components/Movement";

const mock = {
  createdAt: "2022-12-09T10:20:00.909Z",
  product: "Fantastic Granite Bacon",
  points: 42416,
  image: "https://loremflickr.com/640/480/technics",
  is_redemption: false,
  id: "3",
};
describe("<Movement />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(<Movement item={mock} />);
  });
  it("Should render correctly", () => {
    expect(wrapper).toBeDefined();
  });
});
