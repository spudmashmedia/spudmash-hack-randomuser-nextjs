/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Container, AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appbar: {
    color: "white",
    background: "black"
  }
});

let CommonLayoutHoc = props => {
  const classes = useStyles();
  return (
    <div>
      <Container fixed>
        <AppBar position="static" className={classes.appbar}>
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
