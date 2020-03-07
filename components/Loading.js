/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import { Paper, CircularProgress, Typography } from "@material-ui/core";

let Loading = props => {
  return (
    <Paper>
      <CircularProgress />
    </Paper>
  );
};

export default Loading;
