import { createTheme } from "@material-ui/core";

//various themes
export const Themes = (theme = "light") => {
  // const [darkMode , setDarkMode] = useState(false)

  const options = {
    light: {
      palette: {
        type: "light",
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#c2185b",
        },
      },
      typography: {
        fontFamily: "Roboto",
        fontSize: "14",
      },
      spacing: 10,
      transitions: {
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
        easing: {
          linear: "linear",
        },
      },
      backgroundColor: "#fff",
      textColor: "#000",
    },
    slack: {
      palette: {
        type: "light",
        primary: {
          main: "#000",
        },
        secondary: {
          main: "#7314EC",
        },
      },
      backgroundColor: "#fff",
      textColor: "blue",
      typography: {
        fontFamily: "Roboto",
        fontSize: "14",
      },
    },
    dark: {
      palette: {
        type: "light",
        primary: {
          main: "#90CAF9",
        },
        secondary: {
          main: "#F48FB1",
        },
      },
      typography: {
        fontFamily: "Roboto",
        fontSize: "14",
      },
      backgroundColor: "#000",
      textColor: "grey",
    },
    google: {
      palette: {
        type: "light",
        primary: {
          main: "#4285F4",
        },
        secondary: {
          main: "#DB4437",
        },
      },
      typography: {
        fontFamily: "Roboto",
        fontSize: "14",
      },
      backgroundColor: "	#F4B400",
      textColor: "yellow",
    },
  };
  return createTheme(options[theme || {}]);
};
