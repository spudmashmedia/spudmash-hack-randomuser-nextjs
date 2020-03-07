/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Slider, Card, CardContent, Grid, Typography } from "@material-ui/core";

import * as constants from "../common/constants";
import CommonLayoutHoc from "../components/CommonLayoutHoc";
import UserGrid from "../components/UserGrid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  gridItem: {
    spacing: 2
  },
  paper: {
    elevation: 3
  },
  control: theme.spacing(2)
}));

let valueText = value => `value`;

function Home() {
  const classes = useStyles();
  const minCount = 50;
  const maxCount = 1000;
  const steps = 50;

  const [count, setCount] = useState(minCount);

  let handleUserCountChange = (event, newValue) => {
    setCount(newValue);
  };

  console.log(`${minCount} ${maxCount}`);

  return CommonLayoutHoc(
    <div>
      <Grid container className={classes.root} spacing={2} direction="column">
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography id="lbl-user-count" gutterBottom>
                User Count
              </Typography>
              <Slider
                defaultValue={minCount}
                getAriaValueText={valueText}
                aria-labelledby="lbl-user-count"
                step={steps}
                valueLabelDisplay="auto"
                marks={constants.marks}
                min={minCount}
                max={maxCount}
                onChange={handleUserCountChange}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <UserGrid count={count} styles={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
