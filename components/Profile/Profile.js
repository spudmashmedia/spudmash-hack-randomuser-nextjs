/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from "react";
import {
  Avatar,
  Button,
  Popover,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Phone from "@material-ui/icons/Phone";
import Mail from "@material-ui/icons/Mail";
import LocationCity from "@material-ui/icons/LocationCity";
import Person from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

// NOTE: for react-spring to work, need to wrap the target component with "animated" hoc
const AnimatedAvatar = animated(Avatar);

let Profile = props => {
  const classes = useStyles();
  const { data, springSize } = props;

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    springSize ? springSize : 1.1
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [springState, setSpringState] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <PopupState variant="popover" popupId={data.id}>
      {popupState => (
        <div>
          <Button
            id={`btn-${data.id}`}
            title={`${data.id}:[${data.name}]`}
            {...bindTrigger(popupState)}
          >
            <AnimatedAvatar
              alt={data.name}
              src={data.image_thumb}
              onMouseMove={({ clientX: x, clientY: y }) =>
                setSpringState({ xys: calc(x, y) })
              }
              onMouseLeave={() => setSpringState({ xys: [0, 0, 1] })}
              style={{ transform: springState.xys.interpolate(trans) }}
            />
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.image_lrg}
                  title={data.name}
                />
                <CardContent>
                  <List>
                    <ListItem>
                      <Typography variant="h5">{data.name}</Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationCity />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">{data.location}</Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Phone />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">{data.phone}</Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Mail />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">{data.email}</Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Person />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">
                          username: {data.username}
                        </Typography>
                        <Typography variant="body2">
                          password: {data.password}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default Profile;
