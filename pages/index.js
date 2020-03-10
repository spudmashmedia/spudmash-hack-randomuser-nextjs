/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Slider,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";

import * as constants from "../common/constants";
import dataFetcher from "../common/dataFetcher";
import CommonLayoutHoc from "../components/CommonLayoutHoc";
import UserGrid from "../components/UserGrid";
import useSWR from "swr";
import Error from "../components/ErrorWidget";
import randomuser from "../common/randomuser";
import Dropdown from "../components/Dropdown";

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
  dropdown: {
    margin: theme.spacing(1),
    width: 200
  },
  control: theme.spacing(2)
}));

let valueText = value => `value`;

function Home() {
  const classes = useStyles();
  const minCount = 50;
  const maxCount = 1000;
  const steps = 50;

  // register hooks
  const [count, setCount] = useState(minCount);
  const [gender, setGender] = useState(constants.gender.map(x => x.id)[0]);
  const [country, setCountry] = useState(
    constants.countryCodes.map(x => x.id)[0]
  );

  let handleUserCountChange = (event, newValue) => {
    setCount(newValue);
  };

  let handleGenderChange = (event, newValue) => {
    setGender(newValue);
  };

  let handleCountryChange = (event, newValue) => {
    setCountry(newValue);
  };

  const { data, error } = useSWR(
    randomuser.formatPath({ count: count, gender: gender, nat: country }),
    dataFetcher
  );

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
    renderGridComponent = <UserGrid data={userData} isLoading={false} />;
  }

  return CommonLayoutHoc(
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Dropdown
                name="gender-select"
                label="Gender"
                data={constants.gender}
                onChangeHandler={handleGenderChange}
                className={classes.dropdown}
              />
              <Dropdown
                name="country-select"
                label="Country"
                data={constants.countryCodes}
                onChangeHandler={handleCountryChange}
                className={classes.dropdown}
              />
            </CardContent>
          </Card>
        </Grid>
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
