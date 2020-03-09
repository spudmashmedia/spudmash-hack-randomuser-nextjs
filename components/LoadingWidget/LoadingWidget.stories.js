/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import LoadingWidget from "./LoadingWidget";

export default {
  component: LoadingWidget,
  title: "LoadingWidget",
  excludeStories: /.*Data$/,
};

export const Default = () => <LoadingWidget />;
