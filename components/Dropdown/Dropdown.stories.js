/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import {
  Paper,
  Typography,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import CheckBox from "@material-ui/icons/CheckBox";
import Dropdown from "./Dropdown";
import * as constants from "../../common/constants";
import { withA11y } from '@storybook/addon-a11y';

export default {
  component: Dropdown,
  title: "Dropdown",
  decorators: [withA11y],
  excludeStories: /.*Data$/
};

export const Default = () => {
  const [myGender, setMyGender] = useState(constants.gender.map(x => x.id)[0]);
  const [myCountry, setMyCountry] = useState(
    constants.countryCodes.map(x => x.id)[0]
  );

  let handleMyGender = (event, newValue) => {
    setMyGender(newValue);
    console.log(myGender);
  };
  let handleMyCountry = (event, newValue) => {
    setMyCountry(newValue);
    console.log(myCountry);
  };

  return (
    <div>
      <Paper>
        <Card>
          <CardContent>
            <Dropdown
              name="test-dropdown"
              label="Test Dropdown"
              data={constants.gender}
              onChangeHandler={handleMyGender}
            />
            <Dropdown
              name="test-dropdown"
              label="Test Dropdown"
              data={constants.countryCodes}
              onChangeHandler={handleMyCountry}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader avatar={<CheckBox />} title="Output" />
          <CardContent>
            <Typography>Selected gender: {myGender}</Typography>
            <Typography>Selected country code: {myCountry}</Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};
