/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import LoadingWidget from "./LoadingWidget";
import renderer from "react-test-renderer";

describe("LoadingWidget Component Snapshot Test", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<LoadingWidget />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
