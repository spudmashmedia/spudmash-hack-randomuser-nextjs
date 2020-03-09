/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Container, AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appbar: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

let CommonLayoutHoc = props => {
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">RANDOM USER TESTHARNESS</Typography>
          </Toolbar>
        </AppBar>
        {props}
      </Container>
    </div>
  );
};

export default CommonLayoutHoc;
