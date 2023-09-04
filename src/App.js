import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Content/InitialPage";
import Page2 from "./Content/SecondPage";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { Themes } from "./Themes/Themes";
import { Paper } from "@material-ui/core";
import { DarkTheme } from "./context/DarkTheme";
import ButtonAppBar from "./Content/Navbar";
import Footer from "./Content/Footer";
import BasicModal from "./Modal";
import MediaCard from "./Componets/Ecommerce";
import Login from "./Content/Login";
import Shop from "./Content/Shop";
import SwipeableTextMobileStepper from "./Content/Carousel";
import SignUp from "./Content/Signup";

function App() {
  const [currentTheme, setCurrentTheme] = useState("");

  //useEffect used here for set queryParams in URL.
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const themeParam = urlSearchParams.get("theme");
    setCurrentTheme(themeParam);
  }, []);

  const availableTheme = Themes(currentTheme);

  const paperStyle = {
    height: "100vh",
    backgroundColor: availableTheme.backgroundColor,
    color: availableTheme.color,
    overflow: "auto",
  };

  return (
    <ThemeProvider theme={availableTheme}>
      <DarkTheme.Provider value={{ currentTheme, setCurrentTheme }}>
        <Paper style={paperStyle}>
          <BrowserRouter>
            <ButtonAppBar />
            <Routes>
            <Route path="/" element={<SwipeableTextMobileStepper/>}></Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/home" element={<Page1 />} />
              <Route path="/nextPage" element={<Page2 />} />
              <Route path="/imgPage" element={<MediaCard />} />
              <Route path="/modal" element={<BasicModal />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Paper>
      </DarkTheme.Provider>
    </ThemeProvider>
  );
}

export default App;
