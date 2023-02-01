import React from "react";
import "util/analytics";
import { AuthProvider } from "util/auth";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";
import Nav from "./../Nav.js";

function MyApp({ Component, serverEmotionCache, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider serverEmotionCache={serverEmotionCache}>
        <AuthProvider>
          <Nav />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
