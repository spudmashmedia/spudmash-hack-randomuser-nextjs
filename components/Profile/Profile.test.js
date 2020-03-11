/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import Profile from "./Profile";
import renderer from "react-test-renderer";
import { actionData } from "./Profile.stories";

describe("Profile Component Snapshot Test", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Profile data={actionData} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
