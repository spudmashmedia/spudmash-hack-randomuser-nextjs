/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import UserGrid from "./UserGrid";
import { withA11y } from '@storybook/addon-a11y';

export default {
  component: UserGrid,
  title: "UserGrid",
  decorators: [withA11y],
  excludeStories: /.*Data$/
};

export const actionData = [
  {
    id: "15667689-X",
    name: "Angela Moya",
    username: "username",
    password: "password",
    email: "angela.moya@example.com",
    phone: "929-044-312",
    location: "Orihuela, Canarias Spain",
    image_thumb: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    image_mid: "https://randomuser.me/api/portraits/med/women/73.jpg",
    image_lrg: "https://randomuser.me/api/portraits/women/73.jpg"
  },
  {
    id: "2NNaN36732140 24",
    name: "Ambre Deschamps",
    username: "username",
    password: "password",
    email: "ambre.deschamps@example.com",
    phone: "03-81-45-45-60",
    location: "Aubervilliers, Guyane France",
    image_thumb: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
    image_mid: "https://randomuser.me/api/portraits/med/women/72.jpg",
    image_lrg: "https://randomuser.me/api/portraits/women/72.jpg"
  },
  {
    id: "991228915",
    name: "Andrew Young",
    username: "username",
    password: "password",
    email: "andrew.young@example.com",
    phone: "03-1017-9496",
    location: "Australian Capital Territory, New South Wales Australia",
    image_thumb: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
    image_mid: "https://randomuser.me/api/portraits/med/men/92.jpg",
    image_lrg: "https://randomuser.me/api/portraits/men/92.jpg"
  },
  {
    id: "64857192-J",
    name: "Miguel Nieto",
    username: "username",
    password: "password",
    email: "miguel.nieto@example.com",
    phone: "950-858-588",
    location: "Lorca, Región de Murcia Spain",
    image_thumb: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    image_mid: "https://randomuser.me/api/portraits/med/men/20.jpg",
    image_lrg: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    id: "77116352",
    name: "Marc Van Breemen",
    username: "username",
    password: "password",
    email: "marc.vanbreemen@example.com",
    phone: "(724)-143-6221",
    location: "Rijsoord, Drenthe Netherlands",
    image_thumb: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    image_mid: "https://randomuser.me/api/portraits/med/men/65.jpg",
    image_lrg: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: "00000001",
    name: "Not A Real Guy",
    username: "username",
    password: "password",
    email: "not.a.real@guy.com",
    phone: "+61414000111",
    location: "Sydney, NSW Australia",
    image_thumb: "",
    image_mid: "",
    image_lrg: ""
  }
];

export const isLoadingTrue = () => <UserGrid isLoading={true} />;

export const dataLoaded = () => (
  <UserGrid data={actionData} isLoading={false} />
);
