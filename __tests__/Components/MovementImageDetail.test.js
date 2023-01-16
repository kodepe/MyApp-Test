import React from "react";
import renderer from "react-test-renderer";
import MovementImageDetail from "../../src/Components/MovementImageDetail";

const mock = {
  createdAt: "2022-12-09T10:20:00.909Z",
  product: "Fantastic Granite Bacon",
  points: 42416,
  image: "https://loremflickr.com/640/480/technics",
  is_redemption: false,
  id: "3",
};
describe("<MovementImageDetail />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(<MovementImageDetail iamge={mock.image} />);
  });
  it("Should render correctly", () => {
    expect(wrapper).toBeDefined();
  });
});
