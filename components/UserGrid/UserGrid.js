/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { v1 as uuidv1 } from "uuid";
import LoadingWidget from "../LoadingWidget";
import Profile from "../Profile";

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
          <LoadingWidget text={"Something is loading"} />
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
          <Grid key={`${userItem.id}-${uuidv1()}`} item>
            <Profile data={userItem} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UserGrid;
