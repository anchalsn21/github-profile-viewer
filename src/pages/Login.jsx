import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {},
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Login(props) {
  const classes = useStyles();
  const searchUser = async (e) => {
    e.preventDefault();
    props.history.push(`/${e.target.username.value}`);
  };
  return (
    <div className="login__page">
      <div className="title mt-100">
        <h1>Github Profile viewer</h1>
      </div>
      <div className="cntr mt-100">
        <section className="login__section">
          <form
            onSubmit={searchUser}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Enter Github Username"
              variant="outlined"
              name="username"
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              type="submit"
            >
              Search
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
