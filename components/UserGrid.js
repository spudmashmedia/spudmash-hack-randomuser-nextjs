/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import { Avatar, Paper, Grid, Button, Typography } from "@material-ui/core";
import { v1 as uuidv1 } from "uuid";
import Loading from "./Loading";
import useSWR from "swr";
import * as constants from "../common/constants";

async function getRndUsr(path) {
  const res = await fetch(constants.API_URL + path);
  const js = await res.json();
  return js;
}

let UserGrid = (props, styles) => {
  const classes = styles;
  const count = props.count;

  console.log(`usergrid count: ${count}`);

  const { data, error } = useSWR(`/?results=${count}`, getRndUsr);

  if (error)
    return (
      <Grid
        container
        justify="center"
        spacing={1}
        direction="column"
        alignItems="center"
      >
        <Typography>Failed to Load</Typography>
      </Grid>
    );

  if (!data)
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

  // So... data has finally loaded, lets process it:
  const userData = data.results.map(user => ({
    name: `${user.name.first} ${user.name.last}`,
    thumbnail: user.picture.thumbnail
  }));

  return (
    <Paper elevation={3}>
      <Grid container justify="center" spacing={1}>
        {userData.map(userItem => (
          <Grid key={uuidv1() + userItem.name + userItem.thumbnail} item>
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
