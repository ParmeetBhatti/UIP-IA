import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import './App.css';

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 375, //320
        sm: 410, //375
        sml: 500,
        md: 684,  //667
        mdl: 730, //768
        lg: 768, //960
        lgl: 1024,
        xl: 1280,
      },
    },
    palette: {
      background: {
        violet: "violet",
        pink: "pink",
        orange: "orange",
        yellow: "yellow",
        lightgreen: "lightgreen",
        lightblue: "lightblue",
        red: "red",
        blue: "blue",
      },
    },
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBackgroundColor = () => {
    if (screenWidth < theme.breakpoints.values.xs) {
      return theme.palette.background.violet;
    } else if (screenWidth < theme.breakpoints.values.sm) {
      return theme.palette.background.pink;
    } else if (screenWidth < theme.breakpoints.values.sml) {
      return theme.palette.background.orange;
    } else if (screenWidth < theme.breakpoints.values.md) {
      return theme.palette.background.yellow;
    } else if (screenWidth < theme.breakpoints.values.mdl) {
      return theme.palette.background.lightgreen;
    } else if (screenWidth < theme.breakpoints.values.lg) {
      return theme.palette.background.lightblue;
    } else if (screenWidth < theme.breakpoints.values.lgl) {
      return theme.palette.background.red;
    } else {
      return theme.palette.background.blue;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="cardstyle">
        <Card
          sx={{
            width: 200,
            backgroundColor: getBackgroundColor(),
            height: 200,
            border: 1,
            borderRadius: 5,
            padding: 2,
          }}
        >
          <CardContent>
            <h1>UIP Project Custom Breakpoints</h1>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
