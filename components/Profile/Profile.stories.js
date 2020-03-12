/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import Profile from "./Profile";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  component: Profile,
  title: "Profile",
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/
};

export const actionData = {
  id: "77116352",
  name: "Marc Van Breemen",
  username: "LadiesMan217",
  password: "Witwicky123",
  email: "marc.vanbreemen@example.com",
  phone: "(724)-143-6221",
  location: "Rijsoord, Drenthe Netherlands",
  image_thumb: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
  image_mid: "https://randomuser.me/api/portraits/med/men/65.jpg",
  image_lrg: "https://randomuser.me/api/portraits/men/65.jpg"
};

let setupSpringSizeKnob = () => {
  const label = "Spring Size";
  const defaultValue = 1.5;
  const options = {
    range: true,
    min: 1,
    max: 10,
    step: 0.1
  };
  const groupId = "GROUP-ID1";

  return number(label, defaultValue, options, groupId);
};

export const Default = () => {
  const springSize = setupSpringSizeKnob();
  return <Profile data={actionData} springSize={springSize} />;
};
