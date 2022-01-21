import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/enver-icon.ico" />
        <title>Enver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
