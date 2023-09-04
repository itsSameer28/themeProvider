import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
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

function SignUp() {
  const navigate = useNavigate();
  const classes = useStyles();
  const changeTheCursorToPointer = {
    cursor: "pointer",
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
    <div className={classes.container}>
      <form className={classes.root}>
        <Typography variant="h4" color="secondary">
          Sign up
        </Typography>
        <div>
          <TextField
            id="outlined-basic"
            label="Enter Your FirstName:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Enter Your LastName:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Enter Your Email:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Enter Your Password:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            required
          />
        </div>
        <br/>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Sign up
        </Button><br/><br/><br/>
        <Typography color="secondary" style={changeTheCursorToPointer}>
          Already have an account?{" "}
          <Link
            color="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Link>
        </Typography>
      </form>
    </div>
  );
}
export default SignUp;
