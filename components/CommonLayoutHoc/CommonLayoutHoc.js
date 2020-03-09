/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import { Container, AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appbar: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

let CommonLayoutHoc = (props, opts) => {
  const classes = useStyles();

  let title = "";
  if (opts) {
    title = opts.title;
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>{props}</Container>
    </div>
  );
};

export default CommonLayoutHoc;
