/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles(theme => ({
  formcontrol: {
    margin: theme.spacing(1),
    width: 200
  }
}));

let Dropdown = props => {
  let classes = useStyles();
  let label = props.label;
  let data = props.data;
  let onChangeHandler = props.onChangeHandler;

  return (
    <FormControl className={classes.formcontrol} noValidate autoComplete="off">
      <InputLabel>{label}</InputLabel>
      <Select native onChange={e => onChangeHandler(e, e.target.value)}>
        {data.map(x => (
          <option key={x.id} value={x.id}>
            {x.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
