import React from "react";
import UserGrid from "./UserGrid";
import { actionData } from "./UserGrid.stories";
import renderer from "react-test-renderer";

describe("UserGrid Component Snapshot Test", () => {
  test("renders correctly - loading", () => {
    const tree = renderer.create(<UserGrid isLoading={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("renders correctly - with data", () => {
    const tree = renderer
      .create(<UserGrid data={actionData} isLoading={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
