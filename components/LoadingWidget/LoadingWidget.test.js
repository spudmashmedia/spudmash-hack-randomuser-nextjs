import React from "react";
import LoadingWidget from "./LoadingWidget";
import renderer from "react-test-renderer";

describe("LoadingWidget Component Snapshot Test", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<LoadingWidget />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
