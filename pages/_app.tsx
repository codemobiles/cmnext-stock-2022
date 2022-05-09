import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { getSession } from "@/store/slices/userSlice";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // update session & set token
  React.useEffect(() => {
    store.dispatch(getSession());
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
