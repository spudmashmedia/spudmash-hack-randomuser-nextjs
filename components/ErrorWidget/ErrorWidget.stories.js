/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import ErrorWidget from "./ErrorWidget";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: ErrorWidget,
  title: "ErrorWidget",
  decorators: [withA11y],
  excludeStories: /.*Data$/
};

export const actionData = "Something went wrong";

export const Default = () => <ErrorWidget message={actionData} />;
