/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Slider, Card, CardContent, Grid, Typography } from "@material-ui/core";

import * as constants from "../common/constants";
import dataFetcher from "../common/dataFetcher";
import CommonLayoutHoc from "../components/CommonLayoutHoc";
import UserGrid from "../components/UserGrid";
import useSWR from "swr";
import Error from "../components/ErrorWidget";
import randomuser from "../common/randomuser";

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

  const { data, error } = useSWR(`/?results=${count}`, dataFetcher);

  let renderGridComponent;

  if (error) {
    renderGridComponent = (
      <Error message={"Something went wrong with the dataFetcher"} />
    );
  } else if (!data) {
    renderGridComponent = <UserGrid isLoading={true} />;
  } else {
    // So... data has finally loaded, lets process it:
    const users = new randomuser(data);
    let userData = users.get();
    console.log(JSON.stringify(userData, null, 2));

    renderGridComponent = <UserGrid data={userData} isLoading={false} />;
  }

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
          {renderGridComponent}
        </Grid>
      </Grid>
    </div>,
    { title: "RANDOM USER TESTHARNESS" }
  );
}

export default Home;
