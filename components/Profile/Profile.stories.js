/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import Profile from "./Profile";

export default {
  component: Profile,
  title: "Profile",
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

export const Default = () => <Profile id={actionData.id} data={actionData} />;
