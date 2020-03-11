/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import Dropdown from "./Dropdown";
import renderer from "react-test-renderer";

describe("ErrorWidget Component Snapshot Test", () => {
  test("renders correctly", () => {
    const actionData = [
      { id: "male", label: "Male" },
      { id: "female", label: "Female" }
    ];

    const mockOnChangeHandler = jest.fn((e, newValue) => "male");

    const tree = renderer
      .create(
        <Dropdown
          name="test-dropdown"
          label="Test Dropdown"
          data={actionData}
          onChangeHandler={mockOnChangeHandler}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
