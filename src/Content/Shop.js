import React from "react";
import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Slider } from "@material-ui/core";

function valuetext(value) {
  return `${value}°C`;
}
const useStyles = makeStyles((theme) => ({
  Box: {
    width: "50%",
    margin: "0 auto",
    border: 0,
    backgroundColor : 'white',
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    // height: 48,
    padding: "0 30px",
    textAlign: "center",
  },
}));
const Shop = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handlesubmit() {
    navigate("/");
  }

  const inputLabelStyle = {
    style: { color: "grey" },
  };

  const inputField = {
    style: {
      color: "orange",
      borderBottom: "1px solid grey",
    },
  };
  return (
    <Box className={classes.Box}>
      <Typography color="secondary" style={{ fontSize: 20, fontWeight: 200 }}>
        Buy Your Product Now
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter Your Full Name:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter Your Mobile No:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter Your House No:-"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter Your Phone No:-"
            variant="standard"
            color="secondary"
            type="number"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter Your Pin:-"
            variant="standard"
            type="number"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
          />
          <br/>
          <br/>
          <Grid item xs={12}>
            <Typography color="secondary">
              <Typography color="secondary" variant="h6">
                Payment Methods:
              </Typography>
              <br/>
              <div>
                <RadioGroup>
                  <FormControlLabel
                    value="reading"
                    control={<Radio />}
                    label="Cash On Delievery"
                    color="secondary"
                    style={{ marginLeft: "221px" }}
                  />
                  <FormControlLabel
                    value="music"
                    control={<Radio />}
                    label="Net Banking"
                    style={{ marginLeft: "221px" }}
                  />
                  <FormControlLabel
                    value="sports"
                    control={<Radio />}
                    label="Online Payement"
                    style={{ marginLeft: "221px" }}
                  />
                </RadioGroup>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ width: 300 }} className={classes.Box}>
          <Typography color="secondary" variant="h5">
            Quantity:-
          </Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={110}
          />
        </Box>

        <Grid item xs={12}>
          <Typography color="secondary">
            "Subscribe Us For New Products"
          </Typography>
          <FormControlLabel control={<Switch />} />
        </Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={handlesubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Shop;
