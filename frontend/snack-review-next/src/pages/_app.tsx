import "../../styles/globals.css";
import "modern-css-reset/dist/reset.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
