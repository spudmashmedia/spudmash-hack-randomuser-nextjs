/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import { Paper, CircularProgress } from "@material-ui/core";

let LoadingWidget = props => {
  return (
    <Paper>
      <CircularProgress />
    </Paper>
  );
};

export default LoadingWidget;
