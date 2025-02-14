import { AppProps } from "next/app";
import "../styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
