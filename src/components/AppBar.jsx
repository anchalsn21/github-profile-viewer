import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Typography
            className="main__heading__toolbar"
            variant="h5"
            className={classes.title}
          >
            <div className="title">
              <span>
                {" "}
                <GitHubIcon />{" "}
              </span>{" "}
              Github User
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
