/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import { Avatar, Paper, Grid, Button, Typography } from "@material-ui/core";
import { v1 as uuidv1 } from "uuid";
import Loading from "./Loading";
import * as constants from "../common/constants";

let UserGrid = props => {
  const userData = props.data;
  const isLoading = props.isLoading;

  if (isLoading == true)
    return (
      <Grid
        container
        justify="center"
        spacing={1}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Loading text={"Something is loading"} />
        </Grid>
        <Grid item>
          <Typography>Loading...</Typography>
        </Grid>
      </Grid>
    );

  return (
    <Paper elevation={3}>
      <Grid container justify="center" spacing={1}>
        {userData.map(userItem => (
          <Grid key={uuidv1()} item>
            <Button>
              <Avatar alt={userItem.name} src={userItem.thumbnail} />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UserGrid;
