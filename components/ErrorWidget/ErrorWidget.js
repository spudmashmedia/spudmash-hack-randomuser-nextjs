/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

let ErrorWidget = props => {
  let errorMessage = `${props.message}`;
  return (
    <Paper>
      <List>
        <ListItem>
          <ListItemIcon>
            <ErrorIcon color="error" />
          </ListItemIcon>
          <ListItemText primary={errorMessage} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ErrorWidget;
