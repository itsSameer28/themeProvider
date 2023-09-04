import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Button } from '@material-ui/core';
// import { auto } from '@popperjs/core';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((availableTheme) => {
  return {
    button: {
      transition: availableTheme.transitions.create(["transform"], {
        duration: availableTheme.transitions.duration.standard,
        easing: availableTheme.transitions.easing.linear,
      
      }),
      "&:hover": {
        transform: "scale(0.9)",
      },
      marginTop:18,
      marginLeft:156
    },
}});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Diamond ring',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBFDLGOq3A-jkxJHL8-cMOeLo3lQzLAxKrKtUjzFBeElnYAn6KV65Tv2zjublZpu98Ief3l7nMFtElDNVVz2DJiFoPxOQlHJVDBYPUC9C1r0lyi7KIRqikwg',
  },
  {
    label: 'Hand Bag',
    imgPath:
      'https://m.media-amazon.com/images/I/81zWnT1GY+L._AC_SY550_.jpg',
  },
  {
    label: 'Electronics',
    imgPath:
      'https://www.westerndigital.com/content/dam/store/en-us/assets/products/portable/wd-gaming-drive/gallery/2tb/wd-gaming-drive-WDBDFF0020BBK-WESN-2tb-left.png.wdthumb.1280.1280.webp',
  },
  {
    label: 'Jackets ',
    imgPath:
      'https://m.media-amazon.com/images/I/71F+jjD80+S._AC_UY500_.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const navigate =  useNavigate()
  const classes = useStyles()
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
   
    <Box sx={{ maxWidth: 400, flexGrow: 1 }} style={{margin: "0 auto"}} >
    <Typography variant="h5" color="secondary" sx={{marginLeft: 14}}>Get Your Products Now</Typography>
    <br/>
    <br/>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          marginTop: 10,
        
        }}
      >

        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <div>
      <Button variant="contained" color="secondary" className={classes.button} onClick={()=>navigate("/signup")}>
        Sign Up
      </Button>      </div>
    </Box>
  );
}

export default SwipeableTextMobileStepper;