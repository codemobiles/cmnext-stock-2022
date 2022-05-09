import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { getSession } from "@/store/slices/userSlice";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
const drawerWidth = 240;
function MyApp({ Component, pageProps }: AppProps) {
  // update session & set token
  React.useEffect(() => {
    store.dispatch(getSession());
  }, []);
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: 'url("/static/img/background_menu.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            width: drawerWidth,
          },
        },
      },
    },
    typography: {
      fontFamily: "Roboto",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    spacing: 8,
    palette: {
      primary: process.env.REACT_APP_IS_PRODUCTION == "0" ? blue : blue,
      background: {
        default: "#FFF",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
