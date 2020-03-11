/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

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
