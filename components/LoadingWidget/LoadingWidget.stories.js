/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import LoadingWidget from "./LoadingWidget";
import { withA11y } from '@storybook/addon-a11y';

export default {
  component: LoadingWidget,
  title: "LoadingWidget",
  decorator: [withA11y],
  excludeStories: /.*Data$/,
};

export const Default = () => <LoadingWidget />;
