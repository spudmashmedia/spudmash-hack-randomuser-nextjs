import React from "react";
import ErrorWidget from "./ErrorWidget";
import renderer from "react-test-renderer";

describe("ErrorWidget Component Snapshot Test", () => {
  test("renders correctly", () => {
    const actionData = "Something went wrong..";

    const tree = renderer.create(<ErrorWidget message={actionData} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
