import Layout from "../components/Layout.js";
import "../styles/globals.css";
import Head from "next/head.js";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Damedane tech Tutorial</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
