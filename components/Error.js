/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import {
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

let Loading = props => {
  let errorMessage = `Something went wrong with ${props.message}`;
  return (
    <Paper>
      <ListItem>
        <ListItemIcon>
          <ErrorIcon color="error" />
        </ListItemIcon>
        <ListItemText primary={errorMessage} />
      </ListItem>
    </Paper>
  );
};

export default Loading;
