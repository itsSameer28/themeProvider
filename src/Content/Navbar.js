import * as React from "react";
import { AppBar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { DarkTheme } from "../context/DarkTheme";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./Sidebar";


export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const { currentTheme, setCurrentTheme } = useContext(DarkTheme);

  const handleDarkModeChange = () => {
    if (currentTheme !== "dark") {
      return setCurrentTheme("dark");
    }
    setCurrentTheme("light");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="primary"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Theme Switcher
          </Typography>

          {currentTheme === "light" ? (
            <FontAwesomeIcon
              icon={faMoon}
              style={{
                borderRadius: "30px",
                backgroundColor: "black",
                fontSize: "26",
                padding: "7px",
                marginLeft: "65rem",
              }}
              onClick={handleDarkModeChange}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              style={{
                borderRadius: "30px",
                fontSize: "26",
                padding: "7px",
                marginLeft: "65rem",
              }}
              onClick={handleDarkModeChange}
            />
          )}
        </Toolbar>
        <SideBar open={open} setOpen={setOpen} />
      </AppBar>
    </Box>
  );
}