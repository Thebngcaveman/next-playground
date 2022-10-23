import Layout from "../components/Layout.js";
import "../styles/globals.css";
import Head from "next/head.js";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../mui-config/theme";
import createEmotionCache from "../mui-config/createEmotionalCache.jsx";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps }) {
  const { emotionCache = clientSideEmotionCache } = pageProps;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Ricardo Milos next moves</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
