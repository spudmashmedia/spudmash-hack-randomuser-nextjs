/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import { Avatar, Paper, Grid, Button, Typography } from "@material-ui/core";
import { v1 as uuidv1 } from "uuid";
import LoadingWidget from "../LoadingWidget";

let profileClicked = (profile, e) => {
  e.preventDefault();
  console.log(`button clicked\nProfile: {}`, JSON.stringify(profile, null, 2));
};

let profileHover = (profile, e) => {
  e.preventDefault();
  console.log(`button hover\nProfile: {}`, JSON.stringify(profile, null, 2));
};

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
            <Button
              onClick={e => profileClicked(userItem, e)}
              onMouseOver={e => profileHover(userItem, e)}
            >
              <Avatar alt={userItem.name} src={userItem.image_thumb} />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UserGrid;
