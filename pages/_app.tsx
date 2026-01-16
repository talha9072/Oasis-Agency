import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Optional defaults */}
        <meta name="theme-color" content="#000000" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
