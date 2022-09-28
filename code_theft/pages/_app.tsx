// @ts-ignore
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} style={{ backgroundColor: "#f5f5f5" }} />;
}

export default MyApp;
