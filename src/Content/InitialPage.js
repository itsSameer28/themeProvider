import React from "react";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

//UseStyles used for injected css to each components
//makeStles used for making css classes
const useStyles = makeStyles((availableTheme) => {
  return {
    root: {
      border: 0,
      borderRadius: 3,
      color: "white",
      padding: "0 30px",
      textAlign: "center",
    },
  };
});

// console.log(theme)

export default function Page1() {

  const classes = useStyles();



  return (
    <div className="noselect">
      <div className={classes.root}>
        <Typography color="secondary">
          <p>Buy New Products</p>
          
          <h4>Try different Things </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br />
            since the 1500s, when an unknown printer took a galley of type and
            <br />
            scrambled it to make a type specimen book. It has survived not only
            <br />
            five centuries, but also the leap into electronic typesetting,
            <br />
            remaining essentially unchanged. It was popularised in the 1960s
            with
            <br />
            the release of Letraset sheets containing Lorem Ipsum passages, and
            <br />
            more recently with desktop publishing software like Aldus PageMaker
            <br />
            including versions of Lorem Ipsum.
          </p>

        </Typography>
      </div>
    </div>
  );
}