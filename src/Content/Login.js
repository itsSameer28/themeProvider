import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import login from "/home/root1/Desktop/Themeprovider/app/src/Themes/loginn.jpg";
const useStyles = makeStyles((availableTheme) => {
  return {
    root: {
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      // height: 48,
      padding: "0 30px",
      textAlign: "center",
      marginTop: "160px",
      // backgroundImage: `url${login}`,
      button: {
        transition: availableTheme.transitions.create(["transform"], {
          duration: availableTheme.transitions.duration.standard,
          easing: availableTheme.transitions.easing.linear,
        }),
        "&:hover": {
          transform: "scale(0.9)",
        },
      },
    },
  };
});

export default function Login() {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleNextButton = () => {
    navigate("/login");
  };

  const inputLabelStyle = {
    style: { color: "grey" },
  };

  const inputField = {
    style: {
      borderBottom: "1px solid grey",
      color: "orange",
    },
  };
  return (
    <div className={classes.root}>
      <form onSubmit={handleNextButton}>
        <Typography color="secondary" fontFamily="Roboto" variant="h5">
          Login
        </Typography>
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Your Email:-"
          variant="standard"
          type="email"
          color="secondary"
          autoComplete="off"
          InputLabelProps={inputLabelStyle}
          InputProps={inputField}
          required
        />
        <br />
        <br />
        <TextField
          id="filled-basic"
          label="Enter Your PassWord:-"
          variant="standard"
          type="password"
          color="secondary"
          autoComplete="off"
          InputLabelProps={inputLabelStyle}
          InputProps={inputField}
          required
        />
        <br />
        <br />

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Submit
        </Button>
        <br />
        <br />
      </form>
    </div>
  );
}
